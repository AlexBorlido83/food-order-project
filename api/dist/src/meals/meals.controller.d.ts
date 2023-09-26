import { MealsService } from './meals.service';
export declare class MealsController {
    private readonly mealsService;
    constructor(mealsService: MealsService);
    addMeal(mealTitle: string, mealDescription: string, mealPrice: number): Promise<{
        id: string;
    }>;
    getMeals(): Promise<{
        title: string;
        description: string;
        price: number;
    }[]>;
}
