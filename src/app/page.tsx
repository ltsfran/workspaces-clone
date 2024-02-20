import Image from 'next/image'
import { Workspaces } from '@/db/models/workspaces'
import SubscribeForm from '@/components/SubscribeForm'
import FeaturedCard from '@/components/FeaturedCard'

const getTransformRotateClassNameByIndex: Record<number, string> = {
  0: '-rotate-[4deg]',
  1: 'rotate-[3deg]',
  2: 'rotate-[4deg]'
}

export const dynamic = 'force-dynamic'

export default async function Home () {
  const getWorkspaces = async () => {
    const workspaces = await Workspaces.findAll()
    const workspacesData = workspaces.map(workspace => workspace.get({ plain: true }))

    return workspacesData.map(workspace => ({
      title: workspace.title,
      description: workspace.description,
      image: workspace.url_image,
      slug: workspace.slug ?? ''
    }))
  }

  const workspaces = await getWorkspaces()
  const hasWorkspaces = workspaces.length > 0

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
      {hasWorkspaces && (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 justify-center gap-8 grid grid-cols-[repeat(auto-fit,minmax(200px,360px))]">
          {workspaces.map((item, index) => (
            <FeaturedCard
              key={index}
              className={getTransformRotateClassNameByIndex[index]}
              {...item}
            />
          ))}
        </div>
      )}
    </>
  )
}
