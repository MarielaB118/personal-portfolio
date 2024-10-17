'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
    const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className='flex bg-white w-screen h-auto flex flex-row content-center items-center drop-shadow-md relative z-50'> 
            <div className='basis-3/4 mx-8'>
                <a href="/" >
                    <Image
                        src='/logo.png'
                        width={120}
                        height={120}
                        alt = 'logo image of blue m in curvy font'
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-30 lg:h-30"
                    />
                </a>
            </div>

            {/* Hamburger Icon (visible on mobile) */}
            <button className="flex flex-col md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                                
                    : <svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                    </svg>
                    }
            </button>

            {/* Mobile Menu (visible only when open on mobile) */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col w-full items-center space-y-4 pb-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'text-lg hover:underline underline-offset-4', 
                                { 'underline underline-offset-2': pathname === link.href }
                            )}
                            onClick={toggleMenu} // Close menu after clicking a link
                        >
                            <p>{link.name}</p>
                        </Link>
                    ))}
                </div>
            )}

            <div className='hidden md:flex basis-1/4 flex flex-row justify-between mx-8'>
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