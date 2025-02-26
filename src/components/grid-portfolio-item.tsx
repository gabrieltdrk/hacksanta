'use client';

import { Projeto, UserInfo } from '@/app/meus-projetos/page';
import Image from 'next/image';

interface GridPortfolioItemProps {
    projeto: Projeto;
    userInfo: UserInfo;
}

export default function GridPortfolioItem({ userInfo, projeto }: GridPortfolioItemProps) {
    return (
        <div className="flex flex-col">
            <div>Imagem</div>
            <div className="flex justify-between">
                <section className="flex gap-2 items-center">
                    <Image
                        src="/avatar_f.png"
                        width={25}
                        height={25}
                        alt="Avatar"
                    />
                    <span>{userInfo.nome}</span>
                    <span>Ponto</span>
                    <span>{projeto.created_at}</span>
                </section>
                <div>tags</div>
            </div>
        </div>
    );
}
