import { Avatar, Button } from '@mui/material';
import avatarF from '../assets/avatar_f.png';

export function Profile() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center my-12">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
                <Avatar
                    alt="Usuário"
                    src={avatarF}
                    sx={{ width: 122, height: 122 }}
                />
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl">Gabriel Andrade</h1>

                    <h2 className="text-sm">Brasil</h2>
                    <Button
                        variant="outlined"
                        sx={{
                            fontWeight: 'bold',
                            border: '1px solid #ddd',
                            textTransform: 'none',
                            color: '#00000088',
                        }}>
                        Adicionar projeto
                    </Button>
                </div>
            </div>
        </section>
    )
}