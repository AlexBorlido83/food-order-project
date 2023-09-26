import { Model } from 'mongoose';
import { Meal } from './meals.model';
export declare class MealsService {
    private readonly mealModel;
    constructor(mealModel: Model<Meal>);
    insertMeal(title: string, description: string, price: number): Promise<string>;
    getMeals(): Promise<Meal[]>;
}
