import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //conferir exitencia
        //criar hash
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        //salvar no banco
        //retornar URL
        response.json({originURL, hash, shortURL})


    }
}