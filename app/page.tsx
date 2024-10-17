import { raleway, cormorant } from "./ui/fonts";
import Image from "next/image";
import Socials from "@/app/ui/Socials";
import TypingEffect from "./ui/Home/TypingEffect";

export default function Page() {
  return (
      <div className='h-full flex flex-col md:flex-row'>
        {/* left side of home page */}
        <div className='basis-1/2 flex flex-col px-20 md:px-40 pt-20 items-start'>
            <div className={`${raleway.className} text-5xl py-4`}>
              Hi there!
            </div>
            <div className={`${cormorant.className} text-2xl py-4`}>
              <TypingEffect />
            </div>
            <div className='py-4'>
            Hi, I&apos;m Mariela, an aspiring software engineer and recent computer science graduate from Florida State University. 
            Driven by curiosity and a passion for creativity, I enjoy exploring various aspects of software development, and 
            I am always happy to learn something new. Feel free to explore my site and connect with me &ndash; I&apos;m eager to embark 
            on new opportunities and contribute my skills to innovative projects!
            </div>
        </div>

        {/* right side of home page */}
        <div className='basis-1/2 flex flex-col px-40 pt-10 items-center'>
            {/* headshot circle image */}
            <div className='p-2 h-full bg-lightBlue rounded-t-full flex flex-col items-center content-between animate-slide-bottom'>
              <div className='rounded-full mt-12 border-8 border-charcoal overflow-hidden'>
                <Image
                  src='/headshot.jpg'
                  height={275}
                  width={275}
                  alt='professional headshot image'
                  className='rounded-full'
                />
              </div>
            
              {/* connect with me section */}
              <div className='flex flex-col items-center bg-lightBlue px-12 mt-auto'>
                <div className={`${cormorant.className} text-2xl bg-lightBlue`}>Connect with me.</div>
                <div className="bg-lightBlue">
                  <Socials />
                </div>
              </div>
            </div>
        </div>

        {/* background animated svg */}
        <div className='absolute inset-0 overflow-clip h-full'>
          <object className='relative -z-10' type='image/svg+xml' data='/pattern.svg'>svg-animation</object>
        </div>
      </div> 
      
  );
}
