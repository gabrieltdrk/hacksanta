'use client'
import { UserInfo } from '@/app/meus-projetos/page';
import { useState } from 'react';
import Image from 'next/image'

export default function GridPortfolioItem({ userInfo }: { userInfo: UserInfo }) {
    const [openGrid, setOpenGrid] = useState(true)
    const projects = 0;

    return (
        <div className="flex flex-col">
            <div>imagem</div>
            <div className="flex justify-between">
                <section className="flex gap-2">
                    <Image
                        src={"/avatar_f.png"}
                        width={25}
                        height={25}
                        alt="alt"
                    />
                    <span>{`${userInfo.nome} ${userInfo.sobrenome}`}</span>
                    <span>Ponto</span>
                    <span>Data</span>
                </section>
                <div>tags</div>
            </div>
        </div>
    );
}
