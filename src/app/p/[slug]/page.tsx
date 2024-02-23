import { redirect } from 'next/navigation'
import { Workspaces } from '@/db/models/workspaces'
import MarkdownContent from '@/components/MarkdownContent'

interface DetailPageProps {
  params: { slug: string }
}

export default async function DetailPage ({ params }: DetailPageProps) {
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
    <div className="w-full max-w-4xl mx-auto px-4 pt-8 box-border">
      <div className="flex flex-wrap gap-4">
        <h1 className="w-full text-4xl">{workspaceDetail.title}</h1>
        <h2 className="w-full text-xl text-[#404040] mb-6">{workspaceDetail.description}</h2>
      </div>
      <MarkdownContent content={workspaceDetail.content} />
    </div>
  )
}
