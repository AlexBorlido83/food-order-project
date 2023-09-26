import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealsSchema } from './meals.model';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Meal', schema: MealsSchema }])],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
