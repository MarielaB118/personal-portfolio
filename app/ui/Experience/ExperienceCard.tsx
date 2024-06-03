import { cormorant, brawler } from "@/app/ui/fonts";
import { WorkExperience, EducationExperience, ProjectExperience } from "@/app/lib/experience/ExperienceData";


type Experience = {
    title: string;
    company: string;
    duration: string;
    description: string;
    skills: string;
};

type ExperienceCardProps = {
    experienceType: 'work' | 'projects' | 'education';
};

export default function ExperienceCard({ experienceType } : ExperienceCardProps) {

    let experience: Experience[];

    switch(experienceType){
        case 'work': experience = WorkExperience;
        break;
        case 'education': experience = EducationExperience;
        break;
        case 'projects': experience = ProjectExperience;
        break;
        default: experience = []
    }

    return (
        <div>
            {experience.map((exp, index) => (
                <div key={index} className='p-8 motion-safe:hover:scale-[1.01]'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <div className='bg-paynesGray rounded-full size-10'></div>
                            <div className='bg-charcoal w-14 h-1 mx-2.5'></div>
                        </div>
                        <div className={`${cormorant.className} text-2xl`}>{exp.title}</div>
                    </div>
                    <div className={`${brawler.className} text-base space-y-2 pl-24 ml-4 mt-1.5 border-l-4 border-charcoal`}>
                        <div>{exp.company}</div>
                        <div>{exp.duration}</div>
                        <div>{exp.description}</div>
                        {exp.skills && (
                            <div>
                                <div className={`${cormorant.className} text-2xl my-2`}>Skills</div>
                                <div>{exp.skills}</div>
                            </div>    
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}