import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        //conferir exitencia
        //criar hash
        const { originURL } = req.body
        const hash = shortId.generate()
        //salvar no banco
        //retornar URL


    }
}