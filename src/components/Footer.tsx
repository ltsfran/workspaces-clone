'use client'
import Link from 'next/link'
import Image from 'next/image'
import TwitterIcon from '@/assets/twitter.svg'
import InstagramIcon from '@/assets/instagram.svg'
import GithubIcon from '@/assets/github.svg'
import { getNavLinks } from '@/helpers/navLink.helpers'
import SocialMediaLink from '@/components/SocialMediaLink'
import SubscribeForm from './SubscribeForm'

const Footer: React.FC = () => {
  const navLinks = getNavLinks()
  const nativeLinks = navLinks.filter(link => link.native)

  return (
    <footer className="w-full text-neutral-500 mt-6 pt-4 box-border border-t-[1px] border-t-[#e5e5e5]">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-5 box-border md:px-6">
        <div className="flex flex-wrap w-full md:flex-nowrap md:items-center md:justify-between">
          <div className="w-full flex flex-wrap flex-col gap-4 mb-6">
            <Link href="/" title="Logo" className="inline-flex flex-wrap">
              <Image
                src="/logo-nav.png"
                alt="Logo"
                title="Logo"
                width={40}
                height={40}
              />
            </Link>
            <div>
              Workspaces of inspiring creatives,
              <br />
              sent every Saturday and Sunday morning.
            </div>
            <div className="flex flex-wrap gap-3 text-2xl">
              <SocialMediaLink title="Twitter" url="https://twitter.com/workspacesxyz" icon={<TwitterIcon />} />
              <SocialMediaLink title="Instagram" url="https://www.instagram.com/workspacesxyz" icon={<InstagramIcon />} />
              <SocialMediaLink title="Github" url="https://github.com/ltsfran/workspaces-clone" icon={<GithubIcon />} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-neutral-200 mb-6 md:hidden" />
          <div className="flex flex-wrap gap-4 mb-6 w-full">
            <div className="text-sm">Subscribe to the newsletter to get notified when we drop new workspaces every Saturday and Sunday.</div>
            <div className="w-full max-w-lg mx-auto flex flex-wrap justify-center">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral-200 mb-6" />
        <div className="flex flex-wrap gap-4 text-sm md:flex-nowrap md:justify-between">
          <div className="w-full max-w-xs mx-auto">
            <div className="flex flex-wrap justify-between w-full text-sm md:justify-normal md:gap-8">
              {nativeLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  title={link.name}
                  className="text-neutral-500 hover:text-[#404040]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full text-center md:text-end">
            © {new Date().getFullYear()} Workspaces, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
