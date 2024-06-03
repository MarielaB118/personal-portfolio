'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/'},
    { name: 'Experience', href: '/Experience'},
    { name: 'Projects', href: '/Projects'},
    { name: 'Contact', href: '/Contact'},
];

export default function NavBar () {
    const pathname = usePathname();
    return (
        <div className='flex bg-white w-screen h-auto flex flex-row content-center items-center drop-shadow-md relative z-50'> 
            <div className='basis-3/4 mx-8'>
                <a href="/" >
                    <Image
                        src='/logo.png'
                        width={120}
                        height={120}
                        alt = 'logo image of blue m in curvy font'
                    />
                </a>
            </div>
            <div className='basis-1/4 flex flex-row justify-between mx-8'>
                {links.map((link) => {
                    return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'mx-8 hover:underline underline-offset-4', {'underline underline-offset-2' : pathname === link.href },)}
                    >
                        <p>{link.name}</p>
                    </Link>
                    );
                })}
            </div>
        </div>
    )
};