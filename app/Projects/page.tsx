import { raleway } from "@/app/ui/fonts"
import ExperienceCard from "../ui/Experience/ExperienceCard"
import Image from "next/image"

export default function Page() {
    return (
        <div className='w-full md:w-1/2 h-auto pt-20'>
            <div className={`${raleway.className} text-3xl bg-lightBlue w-full p-4 rounded-r-full animate-slide-right`}>Projects</div>
            <ExperienceCard experienceType='projects' />
            {/* background svg */}
            <div className='absolute bottom-0 right-0'>
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