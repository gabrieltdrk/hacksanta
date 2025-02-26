'use client';

import { Projeto, UserInfo } from '@/app/meus-projetos/page';
import EditIcon from '@mui/icons-material/Edit';
import { MenuItem, Paper } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface UserInfoDiscoverProps {
    nome: string;
    sobrenome: string;
}

interface PortfolioGridItemProps {
    projeto: Projeto;
    userInfo?: UserInfo | UserInfoDiscoverProps;
}

export default function PortfolioGridItem({ userInfo, projeto }: PortfolioGridItemProps) {
    const [editProject, setEditProject] = useState(false);

    const pathname = usePathname();
    const isAtDiscoverPage = pathname === '/descobrir';
    console.log(userInfo?.nome)

    return (
        <div className="flex gap-3 flex-col relative">
            <button 
                type="button" 
                onClick={() => setEditProject(!editProject)} 
                className={` ${isAtDiscoverPage ? 'hidden' : 'p-1 absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 transition-all text-black rounded-full'}`}
            >
                <EditIcon />
            </button>
            {editProject && (
                <Paper
                    elevation={3}
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 0,
                        padding: '4px',
                        zIndex: 10,
                        width: 'fit-content',
                    }}
                >
                    <MenuItem>Editar</MenuItem>
                    <MenuItem>Excluir</MenuItem>
                </Paper>
            )}
            <Image
                className="rounded-lg"
                src="https://placehold.co/600x400"
                width={640}
                height={400}
                alt="Avatar"
            />
            <div className="flex justify-between">
                <section className="flex gap-2 items-center justify-center">
                    <Image
                        src="/avatar_f.png"
                        width={25}
                        height={25}
                        alt="Avatar"
                    />
                    <span>{userInfo ? `${userInfo.nome} ${userInfo.sobrenome}` : 'Usuário Desconhecido'}</span>
                    <span>●</span>
                    <span>{new Date(projeto.created_at).toLocaleDateString("pt-BR")}</span>
                </section>
                <div>tags</div>
            </div>
        </div>
    );
}
