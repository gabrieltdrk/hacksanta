'use client'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useActionState, useState } from "react";
import { register, RegisterState } from "@/app/(auth)/registro/actions";
import { redirect } from "next/navigation";

export default function FormRegister() {
    const [showPassword, setShowPassword] = useState(false);

    const [state, formAction, pending] = useActionState<RegisterState, FormData>(
        register,
        {
            success: null,
            message: ""
        }
    )

    return (
        <div className="self-center w-full lg:mr-40 flex flex-col gap-6 p-3">
            <h1 className="text-center text-5xl animate-fade-in">Cadastre-se</h1>
            <form className="flex flex-col gap-3" action={formAction}>
                <div className="flex gap-3">
                    <TextField
                        className="w-full"
                        required
                        id="outlined-required"
                        label="Nome"
                        name="nome"
                    />
                    <TextField
                        className="w-full"
                        required
                        id="outlined-required"
                        label="Sobrenome"
                        name="sobrenome"
                    />
                </div>
                <TextField
                    className="min-w-96 md:min-w-[26rem] lg:min-w-[32rem]"
                    required
                    id="outlined-required"
                    label="Endereço de e-mail"
                    name="email"
                />

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
                <button className='w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-md' type='submit'>
                    Cadastrar
                </button>


                {state.success === true && (state.message)}
                {state.success === false && (state.message)}
            </form>
            <button
                className="self-start text-gray-400"
                onClick={() => redirect("/login")}>
                Voltar
            </button>
        </div>
    )
}