import FormRegister from "@/components/form-register";
import Image from 'next/image'

export default function RegisterPage() {
    return (
        <div className="flex flex-col lg:flex-row h-screen gap-3 lg:gap-x-40 justify-center items-center">
            <Image
                className="hidden md:block h-auto"
                src="/img_cadastro.png"
                width={700}
                height={700}
                alt="Picture of the author"
            />
            <FormRegister />
        </div>
    )
}