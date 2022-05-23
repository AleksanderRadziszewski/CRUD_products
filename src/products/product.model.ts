import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please provide title'] },
  description: { type: String, required: [true, 'Please provide description'] },
  price: { type: Number, required: [true, 'Please provide price'] },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}
