import { UserInfo } from '@/app/meus-projetos/page';
import Image from 'next/image';

interface ProjectProfileProps {
    userInfo?: UserInfo
}

export default function ProjectProfile({ userInfo }: ProjectProfileProps) {
    const nomeCompleto = `${userInfo?.nome} ${userInfo?.sobrenome}`
    return (
        <div className="flex gap-10 justify-center p-3 my-10">
            <Image
                src="/avatar_f.png"
                width={120}
                height={60}
                objectFit='cover'
                alt="Profile pic"
            />
            <div className="flex flex-col gap-3">
                <header className="flex flex-col gap-1">
                    <h1 className="text-2xl">{nomeCompleto}</h1>
                    <span>Brasil</span>
                </header>
                <button type="button" className='bg-gray-300 hover:bg-gray-400 transition-all p-3 rounded-lg'>Adicionar projeto</button>
            </div>
        </div>
    )
}

