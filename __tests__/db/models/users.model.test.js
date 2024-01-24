import { sequelize } from '@/db/models'
import { Users } from '@/db/models/users'

describe('Users model', () => {
  const defaultUser = {
    username: 'ltsfran',
    email: 'ltsfran@gmail.com',
    password: '123456'
  }

  beforeAll(async () => {
    await sequelize.sync()
  })

  afterAll(async () => {
    await Users.destroy({ where: { email: defaultUser.email } })
    await sequelize.close()
  })

  it('should hash the password before saving', async () => {
    const user = await Users.create(defaultUser)
    expect(user.password).not.toBe(defaultUser.password)
  })
})
