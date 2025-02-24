'use client'

import { usePathname, useRouter } from "next/navigation";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Divider, MenuItem, Paper } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { signOut } from "@/app/(auth)/login/actions";

type HeaderProps = {
    user: {
        nome: string;
        sobrenome: string;
        email: string;
    } | null;
};

export default function Header({ user }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const isAtLoginPage = pathname === '/login';
    const isAtRegisterPage = pathname === '/register';


    const [showProfileOptions, setShowProfileOptions] = useState(false);

    if (isAtLoginPage || isAtRegisterPage) return null;

    return (
        <header className="flex justify-between bg-blue-950 p-3 text-white">
            <div className="flex gap-20 justify-center items-center ml-4">
                <Image
                    className="hover:cursor-pointer"
                    onClick={() => router.push("/")}
                    src="/logo_header.png"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <nav>
                    <ul className="flex gap-4 justify-center items-center">
                        <Link href="/meus-projetos" className="hover:underline">Meus projetos</Link>
                        <Link href="/descobrir" className="hover:underline">Descobrir</Link>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-4 mr-4">
                <button>
                    <Image
                        onClick={() => setShowProfileOptions(!showProfileOptions)}
                        src="/avatar_f.png"
                        width={40}
                        height={40}
                        alt="Avatar"
                    />
                </button>

                {showProfileOptions && (
                    <Paper
                        elevation={3}
                        style={{
                            position: 'absolute',
                            top: 65,
                            right: 0,
                            padding: '4px',
                            zIndex: 10,
                            width: 'fit-content'
                        }}
                    >
                        <MenuItem disabled>{user ? user.nome : "Não autenticado"}</MenuItem>
                        <MenuItem disabled>{user ? user.email : "Não autenticado"}</MenuItem>
                        <Divider />
                        <MenuItem>
                            <ExitToApp />
                            <button type="button" onClick={signOut}>
                                Sair
                            </button>
                        </MenuItem>
                    </Paper>
                )}

                <button>
                    <NotificationsIcon />
                </button>
            </div>
        </header>
    );
}
