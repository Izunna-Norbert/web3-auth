import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from "./constants/constants";
import routes from "./routes";
import ThirdwebAuthentication from "./utils/thirdwebAuth";

const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow cors from all origins
app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use(morgan('tiny'));


app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello World' });
});

app.get('/api/v1', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello World' });
});

app.use(ThirdwebAuthentication.authMiddleware);
app.use('/api/v1/auth', ThirdwebAuthentication.authRouter);
app.use('/api/v1/secret', routes.Secret);

app.use('*', (req: Request, res: Response) => {
    return res.status(404).json({ message: 'Not Found' });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
