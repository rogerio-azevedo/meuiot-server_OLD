import express, { Request, Response, NextFunction } from 'express'

import cors from 'cors'
import routes from './shared/routes'

import AppError from './shared/errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.use(express.static('./public'))

app.listen(6200, () => {
  console.log('🚀 Server started on port 6200!')
})
