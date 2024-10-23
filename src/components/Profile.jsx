import { useState, useEffect } from 'react';
import { Avatar, Button, Modal, Box, Typography, TextField } from '@mui/material';
import { Collections } from '@mui/icons-material';
import avatarF from '../assets/avatar_f.png';

export function Profile({ usuarioEmail, open, handleOpen, handleClose }) {
    const [usuario, setUsuario] = useState({ nome: '', email: '' });
    const [titulo, setTitulo] = useState('');
    const [tags, setTags] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null); // Estado para a imagem

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const fetchUsuario = async (email) => {
        try {
            const response = await fetch(`http://localhost:3333/usuarios/loginUsuario?email=${email}`);
            const dadosUsuario = await response.json();
            setUsuario(dadosUsuario);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    };

    useEffect(() => {
        if (usuarioEmail) {
            fetchUsuario(usuarioEmail);
        }
    }, [usuarioEmail]);

    const handleImagemChange = (e) => {
        setImagem(e.target.files[0]); // Salva a imagem selecionada
    };

    const criarPortfolio = async () => {
        if (!imagem) {
            alert('Selecione uma imagem!');
            return;
        }

        const nomeImagem = await uploadImagem(imagem);

        if (!nomeImagem) return;

        const portfolio = {
            titulo,
            link,
            descricao,
            criadorId: usuario.id,
            tags: tags.split(',').map(tag => tag.trim()),
            nomeImagem, // Nome da imagem enviada
        };

        try {
            const response = await fetch('http://localhost:3333/portfolios/criarPortfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(portfolio),
            });

            if (response.ok) {
                alert('Portfólio criado com sucesso!');
            } else {
                console.error('Erro ao criar portfólio:', response.statusText);
                alert('Erro ao criar portfólio');
            }
        } catch (error) {
            console.error('Erro ao enviar portfólio:', error);
        }
    };

    const uploadImagem = async (imagem) => {
        const formData = new FormData();
        formData.append('imagem', imagem);

        try {
            const response = await fetch('http://localhost:3333/portfolios/uploadImagem', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const nomeImagem = await response.text();
                return nomeImagem;
            } else {
                alert('Erro ao enviar imagem');
                return null;
            }
        } catch (error) {
            console.error('Erro ao enviar imagem:', error);
            return null;
        }
    };




    return (
        <section className="flex flex-col gap-4 items-center justify-center my-12">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
                <Avatar
                    alt={usuario.nome}
                    src={avatarF}
                    sx={{ width: 122, height: 122 }}
                />
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl">{usuario.nome}</h1>
                    <h2 className="text-sm">{usuario.email}</h2>
                    <Button
                        onClick={handleOpen}
                        variant="outlined"
                        sx={{
                            fontWeight: 'bold',
                            border: '1px solid #ddd',
                            textTransform: 'none',
                            color: '#00000088',
                        }}
                    >
                        Adicionar projeto
                    </Button>
                    <Modal open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <Typography variant="h6" className="text-center">Editar projeto</Typography>
                            <div className="flex flex-col justify-center gap-4">

                                {/* Primeiro input de arquivo (aparece em telas grandes, escondido no mobile) */}
                                <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                                    <div className="lg:w-1/2">
                                        <div className="flex flex-col hidden lg:flex h-full relative group">
                                            <Typography variant="caption" className="text-center">Selecione o conteúdo que deseja fazer upload</Typography>
                                            {imagem ? (
                                                <div className="relative w-full h-full bg-gray-200 flex justify-center items-center">
                                                    <img
                                                        src={URL.createObjectURL(imagem)}
                                                        alt="Preview"
                                                        className="w-full h-auto object-contain"
                                                    />
                                                    <Button
                                                        variant="outlined"
                                                        component="label"
                                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 text-white transition-opacity duration-300 group-hover:bg-opacity-50"
                                                        sx={{ border: 'none' }} // Remove a borda
                                                    >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            hidden
                                                            onChange={handleImagemChange}
                                                        />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button
                                                    variant="outlined"
                                                    component="label"
                                                    className="w-full flex-1 bg-gray-200 flex flex-col justify-center items-center"
                                                >
                                                    <Collections />
                                                    <Typography className="text-center">Upload para telas grandes</Typography>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        hidden
                                                        onChange={handleImagemChange}
                                                    />
                                                </Button>
                                            )}
                                            <Typography variant="caption" className="text-center mt-2">Visualizar publicação</Typography>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                                        <TextField
                                            className="w-full"
                                            label="Título"
                                            value={titulo}
                                            onChange={(e) => setTitulo(e.target.value)}
                                            required
                                        />
                                        <TextField
                                            className="w-full"
                                            label="Tags (separadas por vírgula)"
                                            value={tags}
                                            onChange={(e) => setTags(e.target.value)}
                                        />
                                        <TextField
                                            className="w-full"
                                            label="Link"
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                        />
                                        <TextField
                                            className="w-full"
                                            label="Descrição"
                                            value={descricao}
                                            multiline
                                            rows={4}
                                            onChange={(e) => setDescricao(e.target.value)}
                                        />
                                    </div>

                                    {/* Segundo input de arquivo (aparece em mobile, escondido em telas grandes) */}
                                    <div className="lg:hidden w-full">
                                        <div className="flex flex-col">
                                            <Typography variant="caption" className="text-center">Selecione o conteúdo que deseja fazer upload</Typography>
                                            <Button
                                                variant="outlined"
                                                component="label"
                                                className="w-full h-full bg-gray-200 flex flex-col justify-center items-center"
                                            >
                                                <Collections />
                                                <Typography className="text-center">Upload para mobile</Typography>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    hidden
                                                    onChange={handleImagemChange}
                                                />
                                            </Button>
                                            <Typography variant="caption" className="text-center mt-2">Visualizar publicação</Typography>
                                        </div>
                                    </div>
                                </div>

                                {/* Botões */}
                                <div className="flex justify-start gap-2 mt-4">
                                    <Button
                                        type="submit"
                                        className="w-1/2 lg:w-1/4"
                                        variant="contained"
                                        color="primary"
                                        onClick={criarPortfolio}
                                    >
                                        Salvar
                                    </Button>
                                    <Button
                                        className="w-1/2 lg:w-1/4"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClose}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </Modal>




                </div>
            </div>
        </section>
    );
}
