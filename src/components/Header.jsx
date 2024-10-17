import { useState } from 'react';
import { Avatar, Paper, IconButton, Divider, MenuItem } from '@mui/material';
import { Menu, Notifications, ExitToApp } from '@mui/icons-material';
import logoHeader from '../assets/logo_header.png';
import avatarF from '../assets/avatar_f.png';

export function Header() {
    const [showPaper, setShowPaper] = useState(false);

    const togglePaper = () => {
        setShowPaper(prevShowPaper => !prevShowPaper);
    };

    return (
        <nav className="w-full flex items-center justify-between px-6 -bg--color-principal-100 h-16">
            <header className="relative flex items-center gap-6">
                <div className="block md:hidden">
                    <IconButton onClick={togglePaper}>
                        <Menu htmlColor="white" />
                    </IconButton>

                    {showPaper && (
                        <Paper
                            elevation={3}
                            style={{
                                position: 'absolute',
                                top: '52px',
                                left: -22,
                                padding: '4px',
                                zIndex: 10,
                                width: 'fit-content'
                            }}
                        >
                            <MenuItem disabled>Gabriel</MenuItem>
                            <MenuItem disabled>gabriel.andradesx@gmail.com</MenuItem>
                            <Divider />
                            <MenuItem>Meus projetos</MenuItem>
                            <MenuItem>Descobrir</MenuItem>
                            <Divider />
                            <MenuItem
                                sx={{
                                    flex: 'flex',
                                    gap: 1
                                }}>
                                <ExitToApp />
                                Sair
                            </MenuItem>

                        </Paper>
                    )}
                </div>
                <img src={logoHeader} alt="Logo" />
                <div className="hidden md:flex -text--color-neutral-60">
                    <MenuItem>Meus projetos</MenuItem>
                    <MenuItem>Descobrir</MenuItem>
                </div>
            </header>
            <footer className="flex items-center gap-6">
                <Avatar alt="Usuário" src={avatarF} />
                <Notifications htmlColor="white" />
            </footer>
        </nav>
    );
}
