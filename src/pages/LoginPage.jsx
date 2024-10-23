import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, TextField, Button, Link, Alert } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import '../globals.css'
import homePageImage from '../assets/img_login.png'
import googleIcon from '../assets/icon_google.svg'

export function LoginPage() {
  return (
    <section className="flex h-screen lg:gap-x-40 lg:justify-start justify-center">
      <img src={homePageImage} className="hidden lg:block" alt="Login" />
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
          }}
        >
          <img src={googleIcon} alt="Google Login" />
          Entrar com o Google
        </Button>

        <h2 className="self-start text-base lg:text-2xl my-3 mt-6 text-[var(--color-neutral-110)]">Faça login com email</h2>

        <TextField className="w-full" id="email" label="Email address" required />

        <FormControl className="w-full" sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">{/* {user.password ? <Visibility /> : <VisibilityOff />} */}</IconButton>
              </InputAdornment>
            }
            label="Password"
            required
          />
        </FormControl>

        <Button type="submit" className="w-full" variant="contained" color="primary">
          Entrar
        </Button>

        <Alert variant="filled" severity="error" className="w-full mt-2">
          Email ou senha inválidos. Tente novamente.
        </Alert>

        <Link color="#ABABAB" component={RouterLink} to="/register" className="self-start" underline="none">
          Cadastre-se
        </Link>
      </form>
    </section>
  )
}
