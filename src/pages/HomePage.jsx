import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField, Button, Link, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import '../globals.css';
import homePageImage from '../assets/img_login.png'
import googleIcon from '../assets/icon_google.svg'

export function HomePage() {
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
            <img src={homePageImage} className="hidden lg:block" />
            <form className="flex gap-2 flex-col lg:mx-12 justify-center items-center w-[60%] lg:w-[40%]">
                <h1 className="text-2xl lg:text-5xl m-3 mb-6 text-[var(color-secondary-90)]">Entre no Orange Portfólio</h1>

                <Button
                    className="flex gap-3"
                    variant="outlined"
                    sx={{
                        fontWeight: 'bold',
                        border: '1px solid #ddd',
                        textTransform: 'none',
                        color: '#00000088',
                    }}>
                    <img src={googleIcon} />
                    Entrar com o Google
                </Button>

                <h2 className="self-start text-base lg:text-2xl my-3 mt-6 text-[var(--color-neutral-110)]">Faça login com email</h2>
                <TextField
                    className='w-full'
                    id="outlined-basic"
                    label='Email address'
                />

                <FormControl className="w-full" sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput

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
                    color='#ABABAB'
                    className='w-full'
                    variant='contained'
                > Entrar
                </Button>

                <Link
                    color='#ABABAB'
                    className="self-start"
                    href="#"
                    underline="none">Cadastre-se</Link>
            </form>
            {/* <Alert variant="filled" severity="success">
                This is a filled success Alert.
            </Alert> */}
        </section>
    )
}