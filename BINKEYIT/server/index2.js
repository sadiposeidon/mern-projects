import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());
app.use(cookieParser())

app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING ${PORT}`);
});