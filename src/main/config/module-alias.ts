import { addAlias } from 'module-alias'
import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config()

const developmentPath = resolve(__dirname, '../../../src')
const productionPath = resolve(__dirname, '../../../dist')

addAlias('@', process.env.NODE_ENV === 'development' ? developmentPath : productionPath)
