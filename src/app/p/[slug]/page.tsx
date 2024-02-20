import { redirect } from 'next/navigation'
import { Workspaces } from '@/db/models/workspaces'

export default async function Detail ({ params }: { params: { slug: string } }) {
  const getWorkspaceDetailBySlug = async (slug: string) => {
    const workspaceId = slug.split('-').at(0)
    const workspace = await Workspaces.findOne({ where: { workspace_id: workspaceId } })

    if (workspace === null) redirect('/')

    const workspaceData = workspace.get({ plain: true })

    return {
      title: workspaceData.title,
      description: workspaceData.description,
      image: workspaceData.url_image,
      content: workspaceData.content
    }
  }

  const workspaceDetail = await getWorkspaceDetailBySlug(params.slug)

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-8 box-border">
      <div className="flex flex-wrap gap-4">
        <h1 className="w-full text-4xl">{workspaceDetail.title}</h1>
        <h2 className="w-full text-xl text-[#404040]">{workspaceDetail.description}</h2>
      </div>
      <div className="text-[#404040]">
        <p>{workspaceDetail.content}</p>
      </div>
    </div>
  )
}
