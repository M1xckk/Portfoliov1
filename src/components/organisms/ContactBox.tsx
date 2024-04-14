import TitleText from '@/components/atoms/TitleText';
import ContactLinks from '@/components/molecules/ContactLinks';
import HomepageText from '@/components/atoms/HomepageText';

import { twMerge } from 'tailwind-merge';

type ContactBoxProps = {
  textDecoration?: string;
}

export default function ContactBox({ textDecoration }: ContactBoxProps) {
  return (
    <>
      <div className='xl:py-16 xl:px-20'>
        <div className='flex flex-col items-center text-center'>
          <TitleText text={"Get In Touch"}/>
          <HomepageText 
            text={"I'm always interested in new opportunities and projects. Feel free to reach out to me if you have any questions or just want to say hi!"} 
            spacing='pt-20 pb-8' 
          />
          <ContactLinks />
        </div>
      </div>
    </>
  )
}