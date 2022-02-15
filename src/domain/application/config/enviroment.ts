const makeEnviroment = (envName: string, defaultValue: string): string => {
  const enviroment = process.env[envName]
  if (enviroment) {
    return enviroment
  }
  return defaultValue
}

export const ENVIROMENT = {
  messages: {
    startBot: makeEnviroment('MESSAGE_START_BOT', 'Bot iniciando...')
  }
}
