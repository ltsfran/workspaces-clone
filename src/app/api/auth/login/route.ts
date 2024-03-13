import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@/configs'
import { Users } from '@/db/models/users'

export async function POST (request: Request) {
  try {
    const { email, password } = await request.json()

    if (email === undefined || password === undefined) {
      return Response.json({ message: 'Email and password are required' }, { status: 400 })
    }

    const user = await Users.findOne({ where: { email }, raw: true }) as any

    if (user === null) {
      return Response.json({ message: 'User not found' }, { status: 404 })
    }

    const userPassword = user.password
    const match = await bcrypt.compare(password, userPassword)

    if (!match) {
      return Response.json({ message: 'Incorrect password' }, { status: 401 })
    }

    const accessToken = jwt.sign({ data: { userId: user.user_id } },
      JWT_SECRET,
      { expiresIn: '1h' })

    return Response.json({
      message: 'Login success',
      data: {
        id: user.user_id,
        email: user.email,
        username: user.username,
        accessToken
      }
    })
  } catch (error) {
    console.error(error)
    return Response.json({ message: 'Internal server error' }, { status: 500 })
  }
}
