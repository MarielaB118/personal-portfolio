import { raleway } from "@/app/ui/fonts"
import ExperienceCard from "@/app/ui/Experience/ExperienceCard"
import Image from "next/image"
export default function Page() {
    return (
        <div className="relative flex flex-row h-auto pt-20">
            <div className='basis-1/2'>
                <div className={`${raleway.className} text-3xl bg-lightBlue w-full p-4`}>Work Experience</div>
                <ExperienceCard experienceType='work' />
            </div>
            <div className='basis-1/2'>
                <div className={`${raleway.className} text-3xl bg-lightBlue w-2/3 p-4 rounded-r-full`}>Education</div>
                <ExperienceCard experienceType='education' />
                
            </div>
            {/* background animated svg */}
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