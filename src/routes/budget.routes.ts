import { Router } from 'express';

const budgetRoutes = Router();

budgetRoutes.get('/', (req, res) => {
  res.send({ message: 'Get all budgets' });
});

budgetRoutes.get('/:id', (req, res) => {
  res.send({ message: 'Get all budgets by id' });
});

budgetRoutes.post('/', (req, res) => {
  res.send({ message: 'Add new budget' });
});

budgetRoutes.put('/', (req, res) => {
  res.send({ message: 'Update budget' });
});

budgetRoutes.delete('/:id', (req, res) => {
  res.send({ message: 'Delete budget' });
});

export default budgetRoutes;
