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
        <div className='flex bg-white w-screen h-auto flex flex-row content-center items-center'> 
            <div className='basis-3/4 mx-8'>
                <Image
                    src='/logo.png'
                    width={120}
                    height={120}
                    alt = 'logo image of blue m in curvy font'
                />
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



                {/* <Link href='/' className='mx-4 underline hover:underline-offset-4'>
                    <p>Home</p>
                </Link>
                <Link href='/Experience'>
                    <p>Experience</p>
                </Link>
                <Link href='/Projects'>
                    <p>Projects</p>
                </Link>
                <Link href='/Contact'>
                    <p>Contact</p>
                </Link> */}
            </div>
        </div>
    )
};