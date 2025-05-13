import Image from 'next/image'
import React from 'react'
import { achievements } from '@/constants'
import SectionHeader from '@/components/SectionHeader'

const AboutUsSection = () => {
  return (
    <div>
      <SectionHeader>About Us</SectionHeader>
      <div className='space-y-20'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center gap-8 w-full max-w-md lg:max-w-full border px-4 py-6 bg-card'>
            <div className='aspect-video max-w-lg lg:w-1/2'>
            <Image src={"/team-pics/team-pic1.jpg"} alt='dummy-img' width={1080} height={720} className='w-full h-full object-center object-cover rounded-2xl'></Image>
            </div>
            <div className='lg:w-1/2'>
              <p className='max-w-lg leading-7 font-inter text-gray-300 mt-4'>
              We are a distinguished team of undergraduate students from SAIRAM
INSTITUTIONS, united by a profound passion for robotics and space
exploration. Our expertise lies in the design and development of Mars
rover prototypes, which we present at renowned international
competitions such as the University Rover Challenge (URC), Indian
Rover Challenge (IRC), and the International Rover Design Challenge
(IRDC). Through a steadfast commitment to innovation and excellence,
we have achieved notable success in these prestigious events,
reflecting our culture of ingenuity and technical proficiency.  
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUsSection