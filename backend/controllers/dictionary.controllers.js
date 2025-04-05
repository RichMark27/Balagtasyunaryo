import Dictionary from "../models/dictionary.models.js";
import mongoose from "mongoose";

// get all data
const getAllDictionary = async (req, res) => {
  const dictionary = await Dictionary.find({}).sort({ title: 1 });
  res.status(200).json(dictionary);
};
//get single data
const getDictionary = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  const dictionary = await Dictionary.findById(id);

  if (!dictionary) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  res.status(200).json(dictionary);
};
//post created
const createDictionary = async (req, res) => {
  const { img_URL, title, denotasyon, konotasyon, pangungusap } = req.body;

  try {
    const dictionary = await Dictionary.create({
      img_URL,
      title,
      denotasyon,
      konotasyon,
      pangungusap,
    });
    res.status(200).json(dictionary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Update one dictionary
const updateDictionary = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  const dictionary = await Dictionary.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!dictionary) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  res.status(200).json(dictionary);
};

//Delete one dictionary
const deleteDictionary = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  const dictionary = Dictionary.findOneAndDelete({ _id: id });

  if (!dictionary) {
    res.status(400).json({ error: "no such dictionary" });
  }

  res.status(200).json(dictionary);
};

export {
  getAllDictionary,
  getDictionary,
  createDictionary,
  updateDictionary,
  deleteDictionary,
};
