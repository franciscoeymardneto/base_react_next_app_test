import { AccountModel } from '../models/account-model'

export type AtuhenticationParams = {
  login: string
  password: string
}

export interface Authentication {
  auth: (params: AtuhenticationParams) => Promise<AccountModel>
}
