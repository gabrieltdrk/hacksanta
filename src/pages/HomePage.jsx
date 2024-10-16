import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField, Button, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import homePageImage from '../assets/img_login.png'

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
        <section className="flex gap-x-40">
            <img src={homePageImage} className="h-screen" />
            <form className="flex gap-2 flex-col justify-center items-center w-[40%]">
                <h3>Entre no Orange Portfólio</h3>
                <button className="">Entrar com Google</button>
                <h4>Faça login com email</h4>
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
                > Entrar
                </Button>

                <Link 
                    className="self-start"
                    href="#" 
                    underline="none">Cadastre-se</Link>
            </form>
            
        </section>
    )
}