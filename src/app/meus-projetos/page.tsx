import GridPortfolio from '@/components/grid-portfolio'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import RedirectIfNotLogged from '@/utils/redirect-if-not-logged';

export interface Projeto {
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
  const userInfo = await RedirectIfNotLogged();

  return <GridPortfolio userInfo={userInfo} />;
}
