import GridPortfolio from '@/components/portfolio-grid';
import RedirectIfNotLogged from '@/utils/redirect-if-not-logged';

export interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  tags: string;
  is_public: boolean;
  created_at: string;
  imagem_url: string;
}

export interface TodosProjetos {
  projeto: Projeto;
  usuario: UserInfo
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
  

  return (
    <main className="flex flex-col gap-3 p-10 animate-fade-in-up">
      <GridPortfolio userInfo={userInfo} />
    </main>
  )
}
