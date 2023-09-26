import * as mongoose from 'mongoose';
export declare const UserInfoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    street: string;
    postalCode: string;
    city: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    street: string;
    postalCode: string;
    city: string;
}> & {
    name: string;
    street: string;
    postalCode: string;
    city: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface UserInfo extends mongoose.Document {
    _id: string;
    name: string;
    street: string;
    postalCode: string;
    city: string;
}
