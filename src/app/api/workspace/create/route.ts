import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import { Workspaces } from '@/db/models/workspaces'
import { JWT_SECRET } from '@/configs'

const validateTokenMiddleware = () => {
  const headerList = headers()
  const authorizationHeader = headerList.get('Authorization')

  if (authorizationHeader === null) {
    throw new Error('Authorization header is missing')
  }

  try {
    const accessToken = authorizationHeader.split(' ')[1]
    jwt.verify(accessToken, JWT_SECRET)
  } catch (error) {
    throw new Error('Invalid token')
  }
}

export async function POST (request: Request) {
  try {
    validateTokenMiddleware()
    const {
      title,
      description,
      content,
      urlImage,
      adminId
    } = await request.json()

    if (
      title === undefined ||
      description === undefined ||
      content === undefined ||
      urlImage === undefined ||
      adminId === undefined
    ) {
      return Response.json({ message: 'All fields are required' }, { status: 400 })
    }

    const workspace = await Workspaces.create({
      title,
      description,
      content,
      url_image: urlImage,
      admin_id: adminId
    }, { raw: true }) as any

    return Response.json({
      message: 'Workspace created successfully',
      data: workspace
    })
  } catch (error) {
    console.error(error)
    return Response.json({ message: 'Internal server error' }, { status: 500 })
  }
}
