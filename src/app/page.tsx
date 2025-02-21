import { TextField, Button } from "@mui/material";
import Image from 'next/image'

export default function HomePage() {
    return (
        <section className="flex h-screen lg:gap-x-10 lg:justify-start justify-center">
            <Image
                className="hidden md:block"
                src="/img_login.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <form className="flex flex-col gap-3 justify-center items-center w-full p-3">
                <TextField
                    className="min-w-96 md:min-w-[26rem] lg:min-w-[32rem]"
                    required
                    id="outlined-required"
                    label="Email address"
                />
                <TextField
                    className="min-w-96 md:min-w-[26rem] lg:min-w-[32rem]"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    className="min-w-96 md:min-w-[26rem] lg:min-w-[32rem]"
                    variant='contained'
                    type='submit'
                >
                    Entrar
                </Button>

            </form>
            {/* <form
                className="flex gap-2 flex-col justify-center items-center w-[60%] lg:w-[40%]"
            >
                <h3 className="my-4">Cadastre-se</h3>

                <div className="flex flex-col lg:flex-row gap-2 w-full">
                    <input
                        className='w-full'
                        required
                        name='Nome'
                    />

                    <input
                        className='w-full'
                        required
                        name='Sobrenome'
                    />
                </div>

                <input
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
                    href='/'
                    className="self-start"
                >
                    Voltar
                </Link>
            </form> */}
        </section>
    );
}
