import { Router } from 'express';
import BudgetService from '../services/budget.service';
import asyncHandler from '../middlewares/async-handler';
import { validateBudget } from '../db/validators/validator.model';

const budgetRoutes = Router();
const budgetService = new BudgetService();

budgetRoutes.get(
  '/',
  asyncHandler(async (req, res) => {
    res.send({
      message: 'Get all budgets',
      budgets: await budgetService.getBudgets(),
    });
  })
);

budgetRoutes.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    res.send({
      message: 'Get budget by Id',
      result: await budgetService.getBudgetById(id),
    });
  })
);

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

budgetRoutes.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const newBudget = validateBudget(req.body);
    res.send({
      message: `Updated budget ${id}`,
      result: await budgetService.updateBudget(id, newBudget),
    });
  })
);

budgetRoutes.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    //TODO: Add validator to make sure it delete the record.
    budgetService.deleteBudget(id);
    res.send({ message: `Deleted budget ${id}` });
  })
);

export default budgetRoutes;
