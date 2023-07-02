import { getDaysInCurrentMonth } from '../common/utils/date.utils';
import { capitalize } from '../common/utils/string.utils';
import { BudgetModel, IBudget } from '../db/models/budget.model';

export default class BudgetService {
  public async getBudgets(): Promise<Array<IBudget>> {
    return await BudgetModel.find({}).exec();
  }

  public async getBudgetById(budgetId: string): Promise<IBudget> {
    const entity = await BudgetModel.findById(budgetId).exec();
    if (!entity) throw new Error('Not entity found.');

    return entity;
  }

  public async addBudget(budget: IBudget): Promise<IBudget> {
    const budgetExist = await BudgetModel.exists({ name: budget.name });

    if (budgetExist) throw new Error('A budget with this name already exists.');

    const newBudget = new BudgetModel({
      ...budget,
      name: capitalize(budget.name.toString()),
      amountLeft: budget.amount,
      amountCanSpentByDay: this.calculateAmountCanBeSpentByDay(budget.amount),
    });
    await newBudget.save();
    return newBudget;
  }

  public async updateBudget(
    budgetId: string,
    budget: IBudget
  ): Promise<IBudget> {
    //TODO: Validate if the amount change and re-calculate the amount can be spent by day base on the new amount.
    const budgetUpdated = await BudgetModel.findByIdAndUpdate(
      budgetId,
      budget,
      {
        new: true,
      }
    );
    if (!budgetUpdated) throw new Error('Not entity found.');

    return budgetUpdated;
  }

  public async deleteBudget(id: string): Promise<boolean> {
    const budgetDeleted = await BudgetModel.findByIdAndDelete(id);
    if (!budgetDeleted) throw new Error('Not entity found.');

    return true;
  }

  private calculateAmountCanBeSpentByDay = (amount: number) =>
    amount / getDaysInCurrentMonth();
}
