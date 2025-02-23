'use client'
import { Alert, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useActionState, useState } from "react";
import { login, LoginState } from "@/app/(auth)/login/actions";
import Link from "next/link";

export default function FormLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const [state, formAction, pending] = useActionState<LoginState, FormData>(
        login,
        {
            success: null,
            message: ""
        }
    )

    return (
        <div className="self-center w-full mr-40 flex flex-col gap-6">
            <h1 className="text-2xl lg:text-4xl text-center">Entre no Orange Portfólio</h1>
            <Button type="button" className="w-12 text-black">
                Entrar com Google
            </Button>
            <form className="flex flex-col gap-3" action={formAction}>



                <h2 className="self-start text-base lg:text-2xl my-3 mt-6 text-[var(--color-neutral-110)]">Faça login com email</h2>

                <TextField className="w-full" id="email" label="Email address" name="email" required />

                <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        name="senha"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'Mostrar senha' : 'Esconder senha    '
                                    }
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    onMouseUp={(e) => e.preventDefault()}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Entrar
                </Button>

                <Alert variant="filled" severity="error" className="w-full mt-2">
                    Email ou senha inválidos. Tente novamente.
                </Alert>

                <Link color="#ABABAB" href="/register" className="self-start">
                    Cadastre-se
                </Link>

                {state.success === false && (state.message)}
            </form>
        </div>
    )
}