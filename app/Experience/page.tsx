import { raleway } from "@/app/ui/fonts";
import ExperienceCard from "@/app/ui/Experience/ExperienceCard";
import Image from "next/image";

export default function Page() {
    return (
        <div className="relative flex flex-col md:flex-row h-auto pt-20">

            {/* work experience */}
            <div className='basis-1/2'>
                <div className={`${raleway.className} text-3xl bg-lightBlue rounded-r-full md:rounded-none w-full p-4 animate-slide-right`}>Work Experience</div>
                <ExperienceCard experienceType='work' />
                <a href='/Badillo_Mariela_Resume.pdf' target='_blank' className="hidden md:flex">
                    <button className='bg-charcoal m-8 p-2 text-white rounded-full'>View Full Resume</button>
                </a>
            </div>

            {/* education experience */}
            <div className='basis-1/2'>
                <div className={`${raleway.className} text-3xl bg-lightBlue w-full md:w-2/3 p-4 rounded-r-full animate-slide-right`}>Education</div>
                <ExperienceCard experienceType='education' />
                <a href='/Badillo_Mariela_Resume.pdf' target='_blank' className="relative z-10 md:hidden">
                    <button className='bg-charcoal m-8 p-2 text-white rounded-full'>View Full Resume</button>
                </a>
            </div>

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