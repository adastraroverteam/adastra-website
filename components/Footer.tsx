import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-background-v1">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0 p-10">
        {/* logo & location */}
        <div className="">
          <div className="flex items-center gap-4">
            <div>
              <Image src={'/rover-imgs/rover-logo.png'} height={70} width={70} alt="rover-logo" className="rounded"/>
            </div>
            <div className='w-[120px] h-[60px] px-2 py-2 rounded-sm bg-white/90 flex justify-center items-center'>
              <Image
                src={'/sponsors-logos/sairam-logo.png'}
                alt='sairam-logo'
                width={80}
                height={100}
                className='aspect-video'
              ></Image>
            </div>
          </div>
        </div>
        
        <div className="">
          <h4 className="mb-6 text-2xl leading-normal text-brand">Location</h4>
          <a
            href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9606025,80.0563133,17.72z/data=!4m6!3m5!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071!16s%2Fm%2F02ppmyg?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 leading-normal font-sans hover:text-brand transition duration-250 ease-in-out cursor-pointer"
          >
            <span className="mr-2"><FaLocationDot className="text-brand inline"></FaLocationDot></span>
            Sri Sai Ram Engineering College, <br />
            Sai Leo Nagar, West Tambaram <br />
            Chennai - 600 044 <br />
            Tamilnadu <br />
          </a>
        </div>

        {/* Quicklinks */}
        <div className="flex flex-col">
            <h4 className="text-2xl leading-normal text-brand">
              Quick Links
            </h4>
            <ul className="font-sans">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="mt-2 text-white-400 hover:text-brand transition duration-250 ease-in-out cursor-pointer"
                >
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        {/* Contact us */}
        <div>
          <h4 className="text-2xl leading-normal text-brand">Contact Us</h4>
          <div className="mt-6 flex items-center gap-2 hover:text-brand transition duration-250 ease-in-out cursor-pointer">
            <HiOutlineMail fontSize={22}></HiOutlineMail>
            <p>adastraroverteam@gmail.com</p>
          </div>
          <div className="mt-2 flex items-center gap-2 hover:text-brand transition duration-250 ease-in-out cursor-pointer">
            <LuPhone fontSize={22}></LuPhone>
            <p>+91 91763 48551</p>
          </div>
        </div> 
      </div>

      <div className="border-white/10 border-t-1 py-10 space-y-4">
        <p className="text-center text-md font-medium text-brand">Stay updated with the latest events and more..</p>
        <div className="flex justify-center gap-4">
          <Link href="https://www.instagram.com/adastra_roverteam/" rel="noopener noreferrer" target="_blank" className="hover:text-brand transition duration-250 ease-in-out cursor-pointer">
            <GrInstagram fontSize={34}></GrInstagram>
          </Link>
          <Link href={"https://www.youtube.com/@adastra_roverteam"} rel="noopener noreferrer" target="_blank" className="hover:text-brand transition duration-250 ease-in-out cursor-pointer">
            <GrYoutube fontSize={34}></GrYoutube>
          </Link>
          <Link href={"https://www.linkedin.com/in/adastraroverteam/"} rel="noopener noreferrer" target="_blank" className="hover:text-brand transition duration-250 ease-in-out cursor-pointer">
            <GrLinkedin fontSize={34}></GrLinkedin>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer