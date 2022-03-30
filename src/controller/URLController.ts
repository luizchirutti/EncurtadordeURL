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

    public async redirect(req: Request, response: Response): Promise<void> {
        // pegar o hash
        const { hash } = req.params
        // encontrar URL original pelo hash
        const url = {
            originURL: 'https://cloud.mongodb.com/v2/621ec82fbca51056dc4ace5b#clusters/connect?clusterId=Cluster0',
            hash: 'FzhG3NGUs',
            shortURL: 'http://localhost:5000/FzhG3NGUs'
        }
        // redirecionar para a URL original a partir da URL encontrada do DB
        response.redirect(url.originURL)
    }
}