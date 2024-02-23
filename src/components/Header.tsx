'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'
import TwitterIcon from '@/assets/twitter.svg'
import InstagramIcon from '@/assets/instagram.svg'
import GithubIcon from '@/assets/github.svg'
import MenuIcon from '@/assets/menu.svg'
import { getNavLinks } from '@/helpers/navLink.helpers'
import SocialMediaLink from '@/components/SocialMediaLink'

const Header: React.FC = () => {
  const pathname = usePathname()

  const navLinks = getNavLinks()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b-[1px] border-b-[#e5e5e5] relative bg-[#FAFAFA]">
      <div className="w-full max-w-screen-xl mx-auto relative">
        <div className="w-full px-4 py-3 box-border flex flex-wrap justify-between items-center relative z-20 bg-[#FAFAFA] md:px-6 md:py-0 md:grid md:grid-cols-3">
          <div className="flex">
            <Link href="/" title="Logo" className="inline-flex flex-wrap">
              <Image
                src="/logo-nav.png"
                alt="Logo"
                title="Logo"
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
                  title={link.name}
                  className={cn('border-r-[1px] h-full flex items-center px-4 text-sm', {
                    'text-[#171717]': pathname === link.url,
                    'text-neutral-500 hover:text-[#404040] hover:bg-[#F5F5F5]': pathname !== link.url
                  })}
                >
                  {link.name}
                </Link>
              ))}
          </nav>
          <div className="hidden text-2xl gap-6 md:flex md:justify-self-end">
            <SocialMediaLink title="Twitter" url="https://twitter.com/workspacesxyz" icon={<TwitterIcon />} />
            <SocialMediaLink title="Instagram" url="https://www.instagram.com/workspacesxyz" icon={<InstagramIcon />} />
            <SocialMediaLink title="Github" url="https://github.com/ltsfran/workspaces-clone" icon={<GithubIcon />} />
          </div>
          <div
            onClick={handleClick}
            className="text-2xl text-[#404040] cursor-pointer p-2 md:hidden">
            <MenuIcon />
          </div>
        </div>
        <div
          className={cn('absolute z-10 w-full p-3 transition duration-300 md:hidden', {
            'translate-y-0': isMenuOpen,
            '-translate-y-full': !isMenuOpen
          })}
        >
          <ul className="p-2 box-border bg-white border border-[#e5e5e5] rounded-lg w-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={handleClick}
                className={cn('rounded cursor-pointer hover:text-[#404040] hover:bg-[#F5F5F5] flex flex-wrap', {
                  'text-[#171717] bg-[#FAFAFA]': pathname === link.url,
                  'text-neutral-500': pathname !== link.url
                })}
              >
                {link.native ?? false
                  ? <Link href={link.url} title={link.name} className="p-2 w-full">{link.name}</Link>
                  : <a href={link.url} title={link.name} className="p-2 w-full">{link.name}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
