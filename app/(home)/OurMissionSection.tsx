import SectionHeader from '@/components/SectionHeader'
import { aboutUs } from '@/constants'

const OurMissionSection = () => {
  const {mission} = aboutUs
  return (
    <div className='flex flex-col items-center'>
      <SectionHeader>{mission.title}</SectionHeader>
      <p className='text-gray-300 lg:text-lg w-full max-w-5xl border bg-card p-8 leading-8'>
        {mission.content}
      </p>
    </div>
  )
}

export default OurMissionSection