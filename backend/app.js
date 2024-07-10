import express from 'express'
import userRouter from './routes/users.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/usuarios', userRouter);

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});


