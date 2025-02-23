'use server'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export type LoginState = {
  success: null | boolean
  message?: string
}

export async function login(previousState: LoginState, formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string | null
  const senha = formData.get('senha') as string | null

  if (!email || !senha) {
    return {
      success: false,
      message: "E-mail e senha são obrigatórios.",
    }
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: senha
  })

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  redirect('/')
}


export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (!error)
    redirect("/login")
}