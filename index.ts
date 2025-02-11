import express from 'express';
import firstRoutes from './routes/firstRoutes';
import { databaseConnection } from './config/database';
import cors from 'cors';

databaseConnection();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', firstRoutes);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
