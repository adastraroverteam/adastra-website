import Image from 'next/image'
import React from 'react'
import { achievements } from '@/constants'
import SectionHeader from '@/components/SectionHeader'

const AchievementsSection = () => {
  return (
    <div>
      <SectionHeader>Achievements</SectionHeader>
      <div className='space-y-20'>
        {achievements.map((achievement) => (
        <div key={achievement.title} className='flex justify-center items-center '>
          <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center gap-8 w-full max-w-md lg:max-w-full border px-4 py-6 bg-card'>
            <div className='aspect-video max-w-md lg:w-1/2'>
            <Image src={achievement.img} alt='dummy-img' width={1080} height={720} className='w-full h-full object-center object-cover rounded-2xl'></Image>
            </div>
            <div className='lg:w-1/2'>
              <h3 className='title mt-4'>{achievement.title}</h3>
              <p className='max-w-md text-gray-300 mt-4'>
                {achievement.description}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection