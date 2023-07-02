import { Document, Schema, model } from 'mongoose';

interface IBudget extends Document {
  name: string;
  amount: number;
  amountSpent: number;
  amountLeft: number;
  amountCanSpentByDay: number;
  active: boolean;
}

const BudgetSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  amountSpent: { type: Number },
  amountLeft: { type: Number },
  amountCanSpentByDay: { type: Number },
  active: { type: Boolean },
});

const BudgetModel = model<IBudget>('Budget', BudgetSchema);
const BudgetType = typeof BudgetModel;

export { IBudget, BudgetModel, BudgetType };
