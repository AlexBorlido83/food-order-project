import { Body, Controller, Get, Post } from '@nestjs/common';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post()
  async addMeal(
    @Body('title') mealTitle: string,
    @Body('description') mealDescription: string,
    @Body('price') mealPrice: number,
  ) {
    console.log('mealDescription', mealDescription);
    const generatedId = await this.mealsService.insertMeal(
      mealTitle,
      mealDescription,
      mealPrice,
    );

    return { id: generatedId };
  }

  @Get()
  async getMeals() {
    const meals = await this.mealsService.getMeals();
    return meals.map((meal) => ({
      title: meal.title,
      description: meal.description,
      price: meal.price,
    }));
  }

  //   @Delete(':id')
  //   async deleteTask(@Param('id') prodId: string) {
  //     await this.mealsService.removeTask(prodId);
  //     return null;
  //   }
}
