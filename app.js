import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

//Conectar o Mongo pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://michel:1234@cluster0.pt4wk.mongodb.net/grades?retryWrites=true&w=majority',
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

app.listen(3001, () => console.log('API iniciada'));
