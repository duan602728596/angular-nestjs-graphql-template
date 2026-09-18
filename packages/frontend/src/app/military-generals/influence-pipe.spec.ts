import { InfluencePipe } from './influence-pipe'

describe('influencePipe', (): void => {
  it('create an instance', (): void => {
    const pipe: InfluencePipe = new InfluencePipe()

    expect(pipe).toBeTruthy()
  })
})
