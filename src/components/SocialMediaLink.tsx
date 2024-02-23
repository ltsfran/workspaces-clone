interface SocialMediaLinkProps {
  url: string
  title: string
  icon: React.ReactNode | JSX.Element
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ url, title, icon }) => (
  <a
    href={url}
    title={title}
    className="flex flex-wrap items-center text-[#9d9d9d] hover:text-[#404040]"
  >
    {icon}
  </a>
)

export default SocialMediaLink
