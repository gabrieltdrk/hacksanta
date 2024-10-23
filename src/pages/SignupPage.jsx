import { 
    FormControl, 
    InputAdornment, 
    IconButton, 
    InputLabel, 
    OutlinedInput, 
    TextField, 
    Button, 
    Link 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import signupImage from '../assets/img_cadastro.png';

export function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        const usuario = {
            nome,
            sobrenome,
            email,
            senha
        };

        try {
            const response = await fetch('http://localhost:3333/usuarios/criarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                resetForm();
            } else {
                alert('Erro ao cadastrar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na comunicação com o servidor.');
        }
    };

    const resetForm = () => {
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
    };

    return (
        <section className="flex h-screen lg:gap-x-40 lg:justify-start justify-center">
            <img src={signupImage} className="hidden lg:block" />
            <form 
                className="flex gap-2 flex-col justify-center items-center w-[60%] lg:w-[40%]" 
                onSubmit={handleSignup}
            >
                <h3 className="my-4">Cadastre-se</h3>

                <div className="flex flex-col lg:flex-row gap-2 w-full">
                    <TextField
                        className='w-full'
                        required
                        id="nome"
                        label='Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <TextField
                        className='w-full'
                        required
                        id="sobrenome"
                        label='Sobrenome'
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>

                <TextField
                    className='w-full'
                    id="email"
                    label='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormControl className="w-full" sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        className="m-0 w-full"
                        id="senha"
                        type={showPassword ? 'text' : 'password'}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Senha"
                    />
                </FormControl>

                <Button
                    className='w-full'
                    variant='contained'
                    type='submit'
                >
                    Cadastrar
                </Button>

                <Link
                    color='#ABABAB'
                    component={RouterLink}
                    to='/'
                    className="self-start"
                    href="/register"
                    underline="none"
                >
                    Voltar
                </Link>
            </form>
        </section>
    );
}
