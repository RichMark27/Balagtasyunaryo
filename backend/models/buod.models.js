import mongoose from "mongoose";

const Schema = mongoose.Schema;

const buodSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minlength: 2,
      maxlength: 100,
    },
    buod: {
      type: String,
      required: [true, "title is required"],
      minlength: 2,
    },
  },
  { timestamps: true }
);

const Buod = mongoose.model("Buod", buodSchema);

export default Buod;
