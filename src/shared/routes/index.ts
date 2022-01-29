import { Router } from "express"

import sessionRouter from "../../modules/Session/routes/session.routes"

const routes = Router()

routes.use("/sessions", sessionRouter)

export default routes
