import SectionHeader from "@/components/SectionHeader"
import { sponsorsLogo } from "@/constants"
import Image from "next/image"

const SponsorsSection = () => {
  return (
    <div className="">
      <SectionHeader>Our Sponsors</SectionHeader>
      <div className="sponsor-wrapper">
        {sponsorsLogo.map((sponsor, index) => (
          <div key={index} className="sponsor-item p-8" style={{animationDelay: `calc(20s/5 * (5 - ${index+1}) * -1)`}}>
            <Image src={sponsor.img} alt="sponsor-img" width={216} height={144} className="w-full h-full object-center object-contain"></Image>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SponsorsSection