import express from 'express'
import { URLController } from './controller/URLController'

const api = express()
api.use(express.json())

const urlController = new URLController()
api.post("/shorten", urlController.shorten)

api.listen(5000, () => console.log('Express Listening'))