// import { login, signup } from './actions'

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }

import FormLogin from '@/components/form-login'
import Image from 'next/image'

export default function LoginPage() {


  return (
    <div className="flex h-screen lg:gap-x-40 lg:justify-start justify-center">
      <Image
        className="hidden md:block h-auto"
        src="/img_login.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
      <FormLogin />
    </div>
  )
}
