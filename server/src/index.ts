import express, {Express} from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
import FinancialRecordRouter from './routes/fin-records';
import cors from 'cors';

dotenv.config({ path: '.env.local' });

const app: Express = express()
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

const mongoURI: string = process.env.MongoDBConnectionString ?? '';
if (!mongoURI) {
  throw new Error('MongoDBConnectionString environment variable is not set.');
}

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err))

app.use("/financial-records", FinancialRecordRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})