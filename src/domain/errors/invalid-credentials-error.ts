export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credenciais iválidas')
    this.name = 'InvalidCredentialsError'
  }
}
