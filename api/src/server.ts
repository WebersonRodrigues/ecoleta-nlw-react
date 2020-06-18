import express from 'express';
const app = express();
const porta = 3333;
import routes from './routes';
import path from 'path';
import cors from 'cors'

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(porta, () => console.log(`Api rodando na porta ${porta}`));