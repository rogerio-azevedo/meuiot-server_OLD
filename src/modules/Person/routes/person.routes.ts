import { Router } from 'express'
import PersonController from '../controllers/PersonController'

const personRouter = Router()
const personController = new PersonController()

personRouter.get('/', personController.index)

export default personRouter
