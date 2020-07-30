import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

import dotenv from 'dotenv';

dotenv.config;

//Conectar o Mongo pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.pt4wk.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));
