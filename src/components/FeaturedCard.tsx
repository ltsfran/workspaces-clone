import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils'

interface FeaturedCardProps {
  title: string
  description: string
  image: string
  slug: string
  className?: string
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  image,
  slug,
  className
}) => (
  <Link
    href={slug}
    title={title}
    className={cn(
      'w-full grid gap-3 bg-white font-caveat p-3 box-border shadow-md rounded transition duration-300 hover:shadow-xl hover:scale-[1.025] hover:opacity-80',
      className
    )}
  >
    <Image
      src={image}
      alt={title}
      title={title}
      width={500}
      height={375}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+x8AAp8BznoPXvoAAAAASUVORK5CYII="
      className="w-full order-1"
    />
    <span className="block text-center text-xl order-2">{title}</span>
    <span className="block text-center text-xl text-neutral-500 order-3">{description}</span>
  </Link>
)

export default FeaturedCard
