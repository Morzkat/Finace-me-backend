import cors from 'cors';
import express from 'express';
import bodyParse from 'body-parser';

// App routes import
import budgetRoutes from './routes/budget.routes';

const PORT = 4000;

const allowedOrigins = ['http://localhost:5173'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(bodyParse.json());
app.use(cors(options));

// App routes
app.use('/api/budgets', budgetRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'App up and running...' });
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
