'use client'

import React, {useState, useEffect} from 'react'
import { roverImgs } from '@/constants'
import Image from 'next/image'
import { RxDotFilled } from "react-icons/rx";
const ImageCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev == roverImgs.length-1 ? 0 : prev+1)
    }, 2500);

    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className='z-0 relative w-full aspect-video max-w-[480px]'>
      <div className='w-full h-full'>
        <Image src={roverImgs[`${currentIndex}`].src} alt='rover-image' width={1080} height={720} className='rounded-2xl w-full h-full object-center object-cover'></Image>
      </div>

      <div className='text-xl flex mt-4 justify-center items-center'>
        {roverImgs.map((img, index) => (
          <div key={index} className={`${index == currentIndex ? ' text-brand' : ' text-white'}`}>
            <RxDotFilled></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel