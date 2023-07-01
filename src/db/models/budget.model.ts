import { Document, Schema, model } from 'mongoose';

interface IBudget extends Document {
  name: String;
  amount: number;
  amountSpent: number;
  amountLeft: number;
  amountCanSpentByDay: number;
}

const BudgetSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  amountSpent: { type: Number },
  amountLeft: { type: Number },
  amountCanSpentByDay: { type: Number },
});

const BudgetModel = model<IBudget>('Budget', BudgetSchema);
const BudgetType = typeof BudgetModel;

export { IBudget, BudgetModel, BudgetType };
