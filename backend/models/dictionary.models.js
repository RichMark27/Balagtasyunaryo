import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dictionarySchema = new Schema(
  {
    img_URL: {
      type: String,
      required: [true, "image url is required"]
    },
    title: {
      type: String,
      required: [true, "title is required"],
      minlength: 2,
      maxlength: 100,
    },
    denotasyon: {
      type: String,
      required: [true, "denotasyon is required"],
      minlength: 2,
    },
    konotasyon: {
      type: String,
      required: [true, "konotasyon is required"],
      minlength: 2,
    },
    pangungusap: {
      type: String,
      required: [true, "pangungusap is required"],
      minlength: 2,
    },
  },
  { timestamps: true }
);

const Dictionary = mongoose.model("Dictionary", dictionarySchema);

export default Dictionary;
