import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { HttpPostClient } from '@/data/protocols/http/httpPostClient'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { AtuhenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AtuhenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
    }
  }
}
