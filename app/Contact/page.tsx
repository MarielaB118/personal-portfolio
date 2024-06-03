import Socials from "@/app/ui/Socials";
import { raleway } from "@/app/ui/fonts";   
import Image from "next/image";

export default function Page() {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='bg-white w-2/3 h-2/3 flex flex-col items-center py-12 space-y-48'>
                <div className={`${raleway.className} text-5xl`}>Let&apos;s get in touch.</div>
                <div className='text-xl'>863&ndash;245&ndash;4453 | mlbadillo8@gmail.com</div>
                <Socials />
            </div>
            {/* background svg */}
            <div className='absolute bottom-0 left-0'>
                <Image
                    src='/pattern.png'
                    width={500}
                    height={500}
                    className='relative -z-10' 
                    alt='svg image with half circle, star, and pointed flower'
                />
            </div>
            {/* background svg */}
            <div className='absolute top-0 right-0'>
                <Image
                    src='/pattern.png'
                    width={500}
                    height={500}
                    className='relative -z-10 scale-x-flip' 
                    alt='svg image with half circle, star, and pointed flower'
                />
            </div>
        </div>
    )
}