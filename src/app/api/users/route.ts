import { NextResponse } from 'next/server'
import { Users } from '@/db/models/users'

export async function GET () {
  const users = await Users.findAll()
  const usersData = users.map(user => user.dataValues)

  return NextResponse.json({
    message: 'Success',
    data: usersData
  })
}
