'use server';

import { UserInfo } from '@/app/meus-projetos/page';
import GridPortfolioItem from './grid-portfolio-item';

export default async function GridPortfolio({ userInfo }: { userInfo: UserInfo }) {
    const projetos = userInfo.projetos || [];

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
            {projetos.length === 0 ? (
                <div className="flex flex-col gap-3 bg-gray-50 cursor-pointer h-56">
                    <h1 className="text-2xl">Adicione o seu primeiro projeto</h1>
                    <p>Compartilhe seu talento com milhares de pessoas!</p>
                </div>
            ) : (
                projetos.map((projeto) => (
                    <GridPortfolioItem 
                        key={projeto.id} 
                        userInfo={userInfo} 
                        projeto={projeto}  
                    />
                ))
            )}
        </main>
    );
}
