  'use client'
  import { useEffect, useState } from 'react'
  import { useKeenSlider } from 'keen-slider/react'
  import "keen-slider/keen-slider.min.css"
  import { youtubeVideos } from '@/constants'
  import SectionHeader from '@/components/SectionHeader'
  import { RxDotFilled } from 'react-icons/rx'

  const VideoShowcase = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
  
    const sliderOptions = {
      loop: true,
      slideChanged(slider: { track: { details: { rel: number } } }) {
        setCurrentSlide(slider.track.details.rel)
            },  slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 25,  
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 25,
          },
        },
      },
    }
  
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderOptions)
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (instanceRef.current) {
          const nextSlide = (currentSlide + 1) % youtubeVideos.length
          instanceRef.current.moveToIdx(nextSlide)
        }
      }, 5000)
  
      return () => clearInterval(interval)
    }, [currentSlide, instanceRef])

    return (
      <div>
        <SectionHeader>Video Showcase</SectionHeader>      
        <div  ref={sliderRef} className='keen-slider text-3xl'>
          {youtubeVideos.map((src, idx) => (
            <div className='keen-slider__slide' key={idx}>
              <div className='aspect-video'>
                <iframe 
                  className='rounded-lg w-full h-full'
                  width="560" 
                  height="315" 
                  src={src} 
                  title={`Video ${idx+1}`} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12 flex justify-center '>
          {youtubeVideos.map((_, idx) => (
            <div key={idx} className={`${idx ==  currentSlide ? 'text-brand' : 'text-white'} text-xl`}>
              <RxDotFilled></RxDotFilled>
            </div>
          ))}
        </div>
      </div>  
    )
  }

  export default VideoShowcase