import { raleway, cormorant } from "./ui/fonts";
import Image from "next/image";
import Socials from "@/app/ui/Socials";

export default function Page() {
  return (
    <div>
      <div className='flex flex-row'>
        {/* left side of home page */}
        <div className='basis-1/2 flex flex-col p-40'>
            <div className={`${raleway.className} text-5xl py-4`}>
              Hi there!
            </div>
            <div className={`${cormorant.className} text-2xl py-4`}>
              I'm Mariela.
            </div>
            <div className='py-4'>
            Hi, I'm Mariela, an aspiring software engineer and recent computer science graduate from Florida State University. 
            Driven by curiosity and a passion for creativity, I enjoy exploring various aspects of software development, and 
            I am always happy to learn something new. Feel free to explore my site and connect with me – I’m eager to embark 
            on new opportunities and contribute my skills to innovative projects!
            </div>
        </div>

        {/* right side of home page */}
        <div className='basis-1/2 flex flex-col h-max pt-20 px-40 pr-96 items-center'>

          {/* arch contents */}
          <div className='flex flex-col space-y-96 px-8 pt-8 bg-lightBlue items-center rounded-t-full border-8 border-lightBlue'>

            {/* headshot circle image */}
            <div className='rounded-full size-96 border-8 border-charcoal overflow-hidden'>
              <Image
                src='/headshot.jpg'
                height={415}
                width={412}
                alt='professional headshot image'
                className='rounded-full'
              />
            </div>

            {/* connect with me section */}
            <div className='flex flex-col justify-self-end items-center bg-lightBlue justify-self-end py-5'>
              <div className={`${cormorant.className} text-2xl bg-lightBlue`}>Connect with me.</div>
              <div className="bg-lightBlue">
                <Socials />
              </div>
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
