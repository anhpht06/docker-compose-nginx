import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: 'tuandz123',
      phone: '07423728388723',
      is_active: faker.datatype.boolean(),
    }
  })
  .build()
