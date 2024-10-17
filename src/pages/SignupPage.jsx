import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import signupImage from '../assets/img_cadastro.png'

export function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex h-screen lg:gap-x-40 lg:justify-start justify-center">
            <img src={signupImage} className="hidden lg:block" />
            <form className="flex gap-2 flex-col justify-center items-center w-[60%] lg:w-[40%]">
                <h3 className="my-4">Cadastre-se</h3>

                <div className="flex flex-col lg:flex-row gap-2 w-full">
                    <TextField
                        className='w-full'
                        required
                        id="outlined-basic"
                        label='Nome'
                    />

                    <TextField
                        className='w-full'
                        required
                        id="outlined-basic"
                        label='Sobrenome'
                    />
                </div>

                <TextField
                    className='w-full'
                    id="outlined-basic"
                    label='Email address'
                />

                <FormControl className=" w-full" sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        className="m-0 w-full"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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
                        label="Password"
                    />
                </FormControl>

                <Button
                    className='w-full'
                    variant='contained'
                    color=''
                > Cadastrar
                </Button>

                <Link
                    color='#ABABAB'
                    component={RouterLink}
                    to='/'
                    className="self-start"
                    href="/register"
                    underline="none">Voltar</Link>


            </form>

        </section>
    )
}