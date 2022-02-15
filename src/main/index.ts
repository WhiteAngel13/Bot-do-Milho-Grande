import './config/module-alias'
import { initBot } from './manual'

const main = async (): Promise<void> => {
  await initBot()
}

void main()
