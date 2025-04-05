import Buod from "../models/buod.models.js";
import mongoose from "mongoose";

//get all buod
const getAllBuods = async (req, res) => {
  const buods = await Buod.find({}).sort();
  res.status(200).json(buods);
};
//get single buood

const getBuod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  const buods = await Buod.findById(id);

  if (!buods) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  res.status(200).json(buods);
};
//create buod
const createBuod = async (req, res) => {
  const { title, buod } = req.body;
  try {
    const buods = await Buod.create({ title, buod });
    res.status(200).json(buods);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//updatebuod
const updateBuod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  const buods = await Buod.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!buods) {
    return res.status(400).json({ error: "no such dictionary" });
  }

  res.status(200).json(buods);
};

//deletebuod

export { getAllBuods, createBuod, updateBuod, getBuod };
