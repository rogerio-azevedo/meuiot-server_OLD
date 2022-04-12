import { Request, Response } from 'express'

//import AttendanceAuditService from '../services/AttendanceAuditService'

export default class PersonController {
  public async index(request: Request, response: Response): Promise<Response> {
    // const partner = Number(request.query.partner) || undefined
    // const condominium = Number(request.query.condominium) || undefined
    // const date1 = request?.query?.date1?.toString()
    // const date2 = request?.query?.date2?.toString()

    // const daily = new AttendanceAuditService()
    // const events = await daily.execute({
    //   partner,
    //   condominium,
    //   date1,
    //   date2,
    // })

    return response.json({ server: 'Person carai!' })
  }
}
