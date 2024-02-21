interface HeaderSocialLinkProps {
  url: string
  title: string
  icon: any
}

const HeaderSocialLink: React.FC<HeaderSocialLinkProps> = ({ url, title, icon }) => (
  <a
    href={url}
    title={title}
    className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
  >
    {icon}
  </a>
)

export default HeaderSocialLink
