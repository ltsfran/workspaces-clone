'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    name: 'Spaces',
    url: '/',
    native: true
  },
  {
    name: 'About',
    url: '/about',
    native: true
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/workspacesxyz',
    native: false
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/workspacesxyz',
    native: false
  },
  {
    name: 'Github',
    url: 'https://github.com/ltsfran/workspaces-clone',
    native: false
  }
]

export default function Header () {
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
            {navLinks.map((link, index) =>
              link.native
                ? (
                  <Link
                    key={index}
                    href={link.url}
                    className={`border-r-[1px] h-full flex items-center px-4 text-sm ${pathname === link.url ? 'text-[#171717]' : 'text-[#737373] hover:text-[#404040] hover:bg-[#F5F5F5]'}`}
                  >
                    {link.name}
                  </Link>
                  )
                : null
            )}
          </nav>
          <div className="hidden text-2xl gap-6 md:flex md:justify-self-end">
            <a
              href="https://twitter.com/workspacesxyz"
              className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" strokeWidth="0" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/workspacesxyz"
              className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
            <a
              href="https://github.com/ltsfran/workspaces-clone"
              className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div
            onClick={handleClick}
            className="text-2xl text-[#404040] cursor-pointer p-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>
        <div className={`absolute z-10 w-full p-3 transition duration-300 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="p-2 box-border bg-white border border-[#e5e5e5] rounded-lg w-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`rounded cursor-pointer hover:text-[#404040] hover:bg-[#F5F5F5] flex flex-wrap ${pathname === link.url ? 'text-[#171717] bg-[#FAFAFA]' : 'text-[#737373]'}`}
              >
                {link.native
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
