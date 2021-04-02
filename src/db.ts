import {Pool} from 'pg'
import {dbCreds} from './config'

const pool = new Pool(dbCreds)

export {pool}