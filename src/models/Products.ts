import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 100,
      match: /^[a-zA-ZñÑ\s.\d]+$/,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

export default model("product", productSchema);
