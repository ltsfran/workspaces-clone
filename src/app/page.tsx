import Image from 'next/image'
import SubscribeForm from '@/components/SubscribeForm'
import FeaturedCard from '@/components/FeaturedCard'

const featuredAds = [
  {
    title: '292 - Logan Liffick',
    description: 'Designer and creative engineer helping to build brands, products, and systems.',
    image: 'https://uploads-ssl.webflow.com/62de6e656aace74d7edeee1d/6454f3f75669a54f1977618c_logan%20liffick%20thumbnail%202-p-500.png',
    url: 'https://www.workspaces.xyz/p/292-logan-liffick'
  },
  {
    title: '288 - Mandy Thao',
    description: 'Crafting digital experiences to improve how technology complements our lives.',
    image: 'https://uploads-ssl.webflow.com/62de6e656aace74d7edeee1d/6454f42ac9fa84702e93cc57_MandyThao%20thumbnail-p-500.png',
    url: 'https://www.workspaces.xyz/p/288-mandy-thao'
  },
  {
    title: '284 - Mine Canan Göldaf',
    description: 'Content Creator at Canva for Türkiye Community where she designs minimal and easy-to-edit free Canva templates.',
    image: 'https://uploads-ssl.webflow.com/62de6e656aace74d7edeee1d/6454f45f3bd98b8998d35b11_MineCanan%20thumbnail-p-500.png',
    url: 'https://www.workspaces.xyz/p/284-mine-canan-goldaf'
  }
]

const getTransformRotateClassNameByIndex: Record<number, string> = {
  0: '-rotate-[4deg]',
  1: 'rotate-[3deg]',
  2: 'rotate-[4deg]'
}

export default function Home () {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center px-4 py-12 md:py-20 md:px-6">
        <div className="w-full flex flex-wrap justify-center mb-4">
          <Image
            src="/logo-sticker.png"
            alt="sticker"
            width={52}
            height={52} />
        </div>
        <h1 className="w-full text-center text-2xl font-switzer mb-5 md:text-3xl md:mb-8">
          Explore the workspaces of creative individuals,
          <br />
          <span className="text-neutral-500">sent directly to your inbox every Saturday and Sunday.</span>
        </h1>
        <div className="w-full max-w-lg">
          <div className="text-center mb-4 text-neutral-500 text-sm">👀 Join 12,000+ other readers</div>
          <SubscribeForm />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:grid-cols-3">
        {featuredAds.map((item, index) => (
          <FeaturedCard
            key={index}
            className={getTransformRotateClassNameByIndex[index]}
            {...item}
          />
        ))}
      </div>
    </>
  )
}
