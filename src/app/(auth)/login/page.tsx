import FormLogin from '@/components/form-login'
import Image from 'next/image'

export default function PaginaLogin() {


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
