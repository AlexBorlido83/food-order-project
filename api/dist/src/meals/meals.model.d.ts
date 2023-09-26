import * as mongoose from 'mongoose';
export declare const MealsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    description: string;
    price: number;
}, mongoose.Document<unknown, {}, {
    title: string;
    description: string;
    price: number;
}> & {
    title: string;
    description: string;
    price: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Meal extends mongoose.Document {
    _id: string;
    title: string;
    description: string;
    price: number;
}
