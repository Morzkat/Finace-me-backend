import { Router } from 'express';
import BudgetService from '../services/budget.service';
import asyncHandler from '../middlewares/async-handler';
import { validateBudget } from '../db/validators/validator.model';

const budgetRoutes = Router();
const budgetService = new BudgetService();

budgetRoutes.get(
  '/',
  asyncHandler(async (req, res) => {
    const budgets = await budgetService.getBudgets();
    res.send({ message: 'Get all budgets', budgets: budgets });
  })
);

budgetRoutes.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `Get all budgets by id: ${id}` });
});

budgetRoutes.post(
  '/',
  asyncHandler(async (req, res) => {
    const newBudget = validateBudget(req.body);
    console.log('budget: ', newBudget);
    res.send({
      message: 'New budget added',
      result: await budgetService.addBudget(newBudget),
    });
  })
);

budgetRoutes.put('/', (req, res) => {
  res.send({ message: 'Update budget' });
});

budgetRoutes.delete('/:id', (req, res) => {
  res.send({ message: 'Delete budget' });
});

export default budgetRoutes;
