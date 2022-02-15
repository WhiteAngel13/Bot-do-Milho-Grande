import { makeGetMessageFromUserController } from '../composition/controllers/makeGetMessageFromUser'

export const initBot = async (): Promise<void> => {
  const controller = makeGetMessageFromUserController()

  const response = await controller.handle({
    body: {
      message: 'oi'
    }
  })

  console.log(response)
}
