interface HeaderSocialLinkProps {
  url: string
  icon: any
}

const HeaderSocialLink: React.FC<HeaderSocialLinkProps> = ({ url, icon }) => (
  <a
    href={url}
    className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
  >
    {icon}
  </a>
)

export default HeaderSocialLink
