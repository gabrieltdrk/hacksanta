import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField, Button } from '@mui/material';
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
        <section className="flex gap-x-40">
            <img src={signupImage} className="h-screen" />
            <div className="flex gap-2 flex-col justify-center items-center w-[40%]">
                <h3 className="my-4">Cadastre-se</h3>

                <div className="flex gap-2 w-full">
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
                > Cadastrar
                </Button>


            </div>

        </section>
    )
}