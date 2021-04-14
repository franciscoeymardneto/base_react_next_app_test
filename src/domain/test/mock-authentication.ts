import { AtuhenticationParams } from '@/domain/usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AtuhenticationParams => ({
  login: faker.internet.email(),
  password: faker.internet.password()
})
