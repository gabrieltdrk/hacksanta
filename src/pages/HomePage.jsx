import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import homePageImage from '../assets/img_login.png'

export function HomePage() {
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

                <TextField
                    className='w-full'
                    id="outlined-basic"
                    label='Password'
                />

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