import express, {Express} from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app: Express = express()
const port = process.env.PORT || 3001;

app.use(express.json())
