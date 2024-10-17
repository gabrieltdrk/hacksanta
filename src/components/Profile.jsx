import { useState } from 'react';
import { Avatar, Button, Modal, Box, Typography, TextField, Container } from '@mui/material';
import { Collections } from '@mui/icons-material';
import avatarF from '../assets/avatar_f.png';

export function Profile() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
                        onClick={handleOpen}
                        variant="outlined"
                        sx={{
                            fontWeight: 'bold',
                            border: '1px solid #ddd',
                            textTransform: 'none',
                            color: '#00000088',
                        }}>
                        Adicionar projeto
                    </Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Adicionar projeto
                            </Typography>

                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label='Título'
                            />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label='Tags'
                            />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label='Link'
                            />
                            <TextField
                                className='w-full'
                                id="outlined-basic"
                                label='Descrição'
                            />

                            <Button
                                className="h-[300px] flex flex-col"
                                sx={{
                                    bgcolor: 'lightgray',
                                    textTransform: 'none'
                                }}
                                component="div">
                                <Collections />
                                <span>Compartilhe seu talento com milhares de pessoas.</span>
                            </Button>


                            <div className="flex gap-2">
                                <Button
                                    color='#ABABAB'
                                    className='w-full'
                                    variant='contained'
                                > Salvar
                                </Button>
                                <Button
                                    color='#ABABAB'
                                    className='w-full'
                                    variant='contained'
                                > Cancelar
                                </Button>
                            </div>
                        </Box>
                    </Modal>

                </div>
            </div>
        </section>
    )
}