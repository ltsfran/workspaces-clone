import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface FeaturedCardProps {
  title: string
  description: string
  image: string
  url: string
  className?: string
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  image,
  url,
  className
}) => {
  return (
    <a href={url} target="_blank" className={twMerge(
      'grid gap-3 bg-white font-caveat p-3 box-border shadow-md rounded transition duration-300 hover:shadow-xl hover:scale-[1.025] hover:opacity-80',
      className
    )}>
      <Image
        src={image}
        alt={title}
        width="500"
        height="375"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+x8AAp8BznoPXvoAAAAASUVORK5CYII="
        className="w-full"
      />
      <span className="block text-center text-xl">{title}</span>
      <span className="block text-center text-xl text-neutral-500">{description}</span>
    </a>
  )
}

export default FeaturedCard
