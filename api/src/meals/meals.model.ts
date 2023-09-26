import * as mongoose from 'mongoose';

export const MealsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Meal extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  price: number;
}
