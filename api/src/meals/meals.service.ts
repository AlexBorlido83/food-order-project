import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './meals.model';

@Injectable()
export class MealsService {
  constructor(@InjectModel('Meal') private readonly mealModel: Model<Meal>) {}

  async insertMeal(title: string, description: string, price: number) {
    const newMeal = new this.mealModel({ title, description, price });
    const result = await newMeal.save();
    console.log(result);
    return result.id as string;
  }

  async getMeals() {
    const meals = await this.mealModel.find().exec();
    return meals as Meal[];
  }

  //   async removeTask(mealId: string) {
  //     const result = await this.mealModel.deleteOne({ _id: mealId }).exec();
  //     console.log(result);
  //     if (result.deletedCount === 0) {
  //       throw new NotFoundException('Could not find Meal Sorry :(');
  //     }
  //   }
  //   }
}
