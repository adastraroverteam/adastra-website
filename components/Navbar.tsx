'use client'
import { useState } from "react"

import Image from "next/image"

import roverLogo from '@/public/rover-imgs/rover-logo.png'
import { navLinks } from "@/constants"
import Link from "next/link"
import {menuOpen, menuClose} from '@/lib/icons'
import { usePathname, useRouter } from "next/navigation"


const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuOpen = () => setIsMenuOpen(prev => !prev)
  const handleLinkClick = (linkTo: string) => {
    router.push(linkTo)
    handleMenuOpen()
  }

  return (
    <div className="relative z-100">
      <header className="fixed w-full border-b-1 border-zinc-600/50 backdrop-blur-3xl">
        <nav className="px-8 py-4  max-w-[1440px] mx-auto ">
          <div className="flex justify-between items-center">
            <div className="size-16 sm:size-20 rounded-full">
              <Image src={roverLogo} alt="rover-logo" width={400} height={400}  priority className="w-full h-full rounded-full"></Image>
            </div>

            {/* for large Screens */}
            <div className="max-md:hidden flex gap-6 font-medium text-slate-300">
              {navLinks.map((navLink) => (
                <Link href={navLink.to} key={navLink.label} className={`${pathName == navLink.to ? 'text-brand' : 'text-base'}`}>{navLink.label}</Link>
              ))}
            </div>

            <div className="md:hidden border border-brand p-1 rounded-md text-brand cursor-pointer" onClick={handleMenuOpen}>
              {!isMenuOpen ? menuOpen : menuClose}
            </div>

              <ul className={`md:hidden absolute  ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-100 opacity-0'} transition-all duration-300 ease-in w-full  h-[calc(100vh-97px)] mt-[97px]  sm:h-[calc(100vh-113px)] sm:mt-[113px] pt-30 bg-background/96  backdrop-blur-3xl flex flex-col items-center gap-8 top-0 left-0 right-0 font-medium text-lg`}>
                {navLinks.map((navLink) => (
                  <li className={`${pathName === navLink.to ? 'text-brand' : 'text-base'}`} key={navLink.label} onClick={() => handleLinkClick(navLink.to)}>{navLink.label}</li>
                ))}
              </ul> 
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar