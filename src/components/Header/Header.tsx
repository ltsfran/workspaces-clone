'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TwitterIcon from '@/assets/twitter.svg'
import InstagramIcon from '@/assets/instagram.svg'
import GithubIcon from '@/assets/github.svg'
import MenuIcon from '@/assets/menu.svg'
import { navLinks } from './Header.constants'
import HeaderSocialLink from './HeaderSocialLink'

const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b-[1px] border-b-[#e5e5e5] relative">
      <div className="w-full max-w-screen-xl mx-auto relative">
        <div className="w-full px-4 py-3 box-border flex flex-wrap justify-between items-center relative z-20 bg-[#FAFAFA] md:py-0 md:grid md:grid-cols-3">
          <div className="flex">
            <Link href="/" className="inline-flex flex-wrap">
              <Image
                src="/logo-nav.png"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <nav className="hidden border-l-[1px] border-l-[#E5E5E5] h-16 md:flex md:justify-self-center">
            {navLinks
              .filter(link => link.native)
              .map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`border-r-[1px] h-full flex items-center px-4 text-sm ${pathname === link.url ? 'text-[#171717]' : 'text-[#737373] hover:text-[#404040] hover:bg-[#F5F5F5]'}`}
                >
                  {link.name}
                </Link>
              ))}
          </nav>
          <div className="hidden text-2xl gap-6 md:flex md:justify-self-end">
            <HeaderSocialLink url="https://twitter.com/workspacesxyz" icon={<TwitterIcon />} />
            <HeaderSocialLink url="https://www.instagram.com/workspacesxyz" icon={<InstagramIcon />} />
            <HeaderSocialLink url="https://github.com/ltsfran/workspaces-clone" icon={<GithubIcon />} />
          </div>
          <div
            onClick={handleClick}
            className="text-2xl text-[#404040] cursor-pointer p-2 md:hidden">
            <MenuIcon />
          </div>
        </div>
        <div className={`absolute z-10 w-full p-3 transition duration-300 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="p-2 box-border bg-white border border-[#e5e5e5] rounded-lg w-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`rounded cursor-pointer hover:text-[#404040] hover:bg-[#F5F5F5] flex flex-wrap ${pathname === link.url ? 'text-[#171717] bg-[#FAFAFA]' : 'text-[#737373]'}`}
              >
                {link.native ?? false
                  ? <Link href={link.url} className="p-2 w-full">{link.name}</Link>
                  : <a href={link.url} className="p-2 w-full">{link.name}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
