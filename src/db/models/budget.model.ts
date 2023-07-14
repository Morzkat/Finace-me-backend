import { Document, Schema, model } from 'mongoose';

interface IBudget extends Document {
  name: string;
  amount: number;
  amountSpent: number;
  amountLeft: number;
  amountCanSpentByDay: number;
  period: string;
  wallet: string;
  currency: string;
  createAt: string;
  updateAt: string;
  active: boolean;
}

const BudgetSchema = new Schema(
  {
    name: { type: String, trim: true, unique: true },
    amount: { type: Number },
    amountSpent: { type: Number },
    amountLeft: { type: Number },
    amountCanSpentByDay: { type: Number },
    period: { type: String },
    currency: { type: String },
    wallet: { type: String },
    active: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const BudgetModel = model<IBudget>('Budget', BudgetSchema);
const BudgetType = typeof BudgetModel;

export { IBudget, BudgetModel, BudgetType };
