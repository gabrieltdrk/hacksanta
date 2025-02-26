'use server'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export type RegisterState = {
  success: null | boolean
  message?: string
}

export async function register(previousState: RegisterState, formData: FormData) {
  const supabase = await createClient()

  const nome = formData.get('nome') as string
  const sobrenome = formData.get('sobrenome') as string
  const email = formData.get('email') as string
  const senha = formData.get('senha') as string

  // Criando usuário no Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password: senha,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/confirm`,
    },
  })

  if (authError) {
    return {
      success: false,
      message: authError.message,
    }
  }

  const userId = authData.user?.id

  if (!userId) {
    return {
      success: false,
      message: "Erro ao obter ID do usuário.",
    }
  }

  // Inserindo usuário na tabela "usuarios"
  const { error: insertError } = await supabase.from('usuarios').insert({
    id: userId,
    nome,
    sobrenome,
  })

  if (insertError) {
    return {
      success: false,
      message: insertError.message,
    }
  }

  return {
    success: true,
    message: "E-mail enviado!",
  }
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (!error) redirect("/login")
}
