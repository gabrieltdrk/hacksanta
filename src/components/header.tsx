'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();
    const isAtLoginPage = pathname === '/login' ? true : false

    return (
        <nav className={`${isAtLoginPage ? 'hidden' : 'flex justify-between bg-blue-900'}`}>
            <div className="flex">
                <Image
                        className="hidden md:block h-auto"
                        src="/logo_header.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                      />
            </div>
            <div className="flex">

            </div>
        </nav>
    )
}
