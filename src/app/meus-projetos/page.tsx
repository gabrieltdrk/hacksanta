import GridPortfolio from '@/components/grid-portfolio'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  tags: string;
  created_at: string;
}

export interface UserInfo {
  id: string;
  email: string;
  nome: string;
  sobrenome: string;
  projetos: Projeto[];
}

export default async function PortfolioPage() {
  const supabase = await createClient();

  const { data: usuario } = await supabase.auth.getUser();

  if (!usuario.user) {
    return redirect('/login');
  }

  const { data: userInfo } = await supabase
    .from('usuarios')
    .select('*, projetos!left(id_criador)')
    .eq('id', usuario.user.id) as unknown as { data: UserInfo[] }

    console.log(userInfo[0].id)

  if (!userInfo) {
    return redirect('/login');
  }

  return <GridPortfolio userInfo={userInfo[0]} />;
}
