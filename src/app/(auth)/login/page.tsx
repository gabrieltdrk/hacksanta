import FormLogin from '@/components/form-login'
import Image from 'next/image'

export default function PaginaLogin() {


  return (
    <div className="flex flex-col lg:flex-row h-screen gap-3 lg:gap-x-40 justify-center items-center animate-fade-in-up">
      <Image
        className="hidden lg:block h-auto"
        src="/img_login.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
      <Image
        className="block lg:hidden h-auto bg-blue-950"
        src="/logo_home.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <FormLogin />
    </div>
  )
}
