import { Test, type TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller.ts'
import { AppService } from './app.service.ts'

describe('appController', (): void => {
  let appController: AppController

  beforeEach(async (): Promise<void> => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', (): void => {
    it('should return "Hello World!"', (): void => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
