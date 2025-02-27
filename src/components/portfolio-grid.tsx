'use server';

import { UserInfo } from '@/app/meus-projetos/page';
import GridPortfolioItem from '@/components/portfolio-grid-item';
import ProjectProfile from '@/components/portfolio-profile';
import SearchProjects from '@/components/search-projects';
import { createClient } from '@/utils/supabase/server';

export interface AllProjectsProps {
    id: string;
    nome: string;
    descricao: string;
    tags: string;
    is_public: boolean;
    created_at: string;
    imagem_url: string;
    usuarios: {
        id: string;
        nome: string;
        sobrenome: string;
    };
}

export default async function PortfolioGrid({ userInfo, allProjects }: { userInfo?: UserInfo, allProjects?: AllProjectsProps[] }) {
    const supabase = await createClient();

    const projetos = userInfo?.projetos || [];

    if (!userInfo) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
                {allProjects?.map((aProject) => (
                    <GridPortfolioItem
                        key={aProject.id}
                        userInfo={aProject.usuarios}
                        projeto={aProject}
                    />
                ))}
            </div>
        );
    }

    return (
        <>
            <ProjectProfile userInfo={userInfo} />
            <SearchProjects label="Meus projetos" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
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
            </div>
        </>
    );
}
