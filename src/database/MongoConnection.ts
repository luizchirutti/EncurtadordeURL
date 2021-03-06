import mongoose from 'mongoose'
import { config } from '../../dist/config/Constants'
export class MongoConnection {
    public async connect(): Promise<void> {
        try{
            await mongoose.connect(config.MONGO_CONNNECTION,{ useNewUrlParser: true, useUnifiedTopology: true})
            console.log('Database Connected')
        } catch (err){
            console.error(err.message)
            process.exit(1)
        }
    }
}