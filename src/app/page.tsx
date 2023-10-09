import Image from 'next/image'
import SubscribeForm from '@/components/SubscribeForm'

export default function Home () {
  return (
    <div className="w-full flex flex-wrap justify-center items-center py-12 md:py-20">
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
        <span className="text-[#737373]">sent directly to your inbox every Saturday and Sunday.</span>
      </h1>
      <div className="w-full max-w-lg">
        <div className="text-center mb-4 text-[#737373] text-sm">👀 Join 12,000+ other readers</div>
        <SubscribeForm />
      </div>
    </div>
  )
}
