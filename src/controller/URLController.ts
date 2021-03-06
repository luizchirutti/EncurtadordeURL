import { Request, Response } from 'express'
import shortId from 'shortid'
import { URLModel } from '../../dist/database/model/URL'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //conferir exitencia
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            response.json(url)
            return
        }
        //criar hash
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        //salvar no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        //retornar URL
        response.json({ originURL, hash, shortURL })


    }

    public async redirect(req: Request, response: Response): Promise<void> {
        // pegar o hash
        const { hash } = req.params
        const url = await URLModel.findOne ({ hash })

        if (url) {
            response.redirect(url.originURL)
            return
        }
        
        response.status(400).json({ error: 'URL not found' })

    }
}