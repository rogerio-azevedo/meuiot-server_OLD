import { Router } from 'express'

import sessionRouter from '../../modules/Session/routes/session.routes'
import personRouter from '../../modules/Person/routes/person.routes'

const routes = Router()

routes.use('/sessions', sessionRouter)
routes.use('/persons', personRouter)

export default routes
