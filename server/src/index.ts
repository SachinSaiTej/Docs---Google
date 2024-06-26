import { Express, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import env from './config/env.config';
import db from './db/models';


dotenv.config();

const app: Express = express();
app.use(express.json());
const port = 8080;

db.sequelize.sync();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
