import express from 'express';
import router from './routes/router';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, 'infrastructure', 'config', '.env');
dotenv.config({ path: envPath });

const app = express();

app.use(bodyParser.json());
app.use(router);

export default { app }
