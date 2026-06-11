import mongoose, { Schema, Document } from 'mongoose';

export interface IShippingRate extends Document {
  origin: string;
  destination: string;
  airRate: number;
  expressRate: number;
  airTransit: string;
  expressTransit: string;
  documents: string[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ShippingRateSchema = new Schema<IShippingRate>(
  {
    origin: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    destination: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    airRate: {
      type: Number,
      required: true,
      min: 0,
    },
    expressRate: {
      type: Number,
      required: true,
      min: 0,
    },
    airTransit: {
      type: String,
      required: true,
    },
    expressTransit: {
      type: String,
      required: true,
    },
    documents: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for origin + destination
ShippingRateSchema.index({ origin: 1, destination: 1, isActive: 1 });

export const ShippingRate =
  mongoose.models.ShippingRate ||
  mongoose.model<IShippingRate>('ShippingRate', ShippingRateSchema);
