import * as mongoose from 'mongoose';

export const UserInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
});

export interface UserInfo extends mongoose.Document {
  _id: string;
  name: string;
  street: string;
  postalCode: string;
  city: string;
}
