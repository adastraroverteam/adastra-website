import ImageCarousel from "@/components/ImageCarousel";
import { FaArrowRight } from "react-icons/fa6";
import AchievementsSection from "./AchievementsSection";
import OurMissionSection from "./OurMissionSection";
import SponsorsSection from "./SponsorsSection";
import VideoShowcase from "./VideoShowcase";
import AboutUsSection from "./AboutUs";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto pt-[97px] sm:pt-[113px]">
      <div id="home" className="padding">
        <div className="w-full  flex flex-col lg:flex-row gap-16 justify-center items-center">
          <section className="lg:w-1/2 max-lg:text-center">
            <h1 className="mt-2 text-h1 leading-tight  font-bold"><span className="text-brand">Ad Astra </span>Rover Team</h1>
            <p className="mt-2 text-[#999999]  text-base">Pioneering Mars Exploration Through Student Innovation</p>
            <p className="mt-10 text-base lg:text-lg max-lg:mx-auto max-w-xl">Representing India on the global stage, we design and build cutting-edge rovers to push the boundaries of space robotics. Join us as we reach for the stars!</p>
            <div className="flex  max-lg:justify-center mt-10 ">
              <button className="group flex justify-center items-center px-6 py-2 rounded-full font-semibold bg-gradient-to-b from-brand-500 to-brand-600 text-white focus:ring-2 focus:ring-brand-400 hover:shadow-xl transition duration-200 cursor-pointer">
                Discover our mission &nbsp;<span className="group-hover:translate-x-1 transition duration-200 ease-in-out"><FaArrowRight></FaArrowRight></span>
              </button>
            </div>
          </section>

          <section className="w-full lg:w-1/2  lg:h-[480px] flex items-center justify-center">
            <ImageCarousel></ImageCarousel>
          </section>

        </div>
      </div>

      <div className="padding">
        <AboutUsSection></AboutUsSection>
      </div>
{/* 
      <div className="padding">
        <TeamImgSection></TeamImgSection>
      </div> */}

      <div id="achievements" className="padding">
        <AchievementsSection></AchievementsSection>
      </div>

      <div id="our-mission" className="padding">
        <OurMissionSection></OurMissionSection>
      </div>

      <div className="padding">
        <SponsorsSection></SponsorsSection>
      </div>

      <div id="video-showcase" className="padding">
        <VideoShowcase></VideoShowcase>
      </div>
    </main>
  );
}
