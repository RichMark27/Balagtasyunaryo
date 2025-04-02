import { Router } from "express";
import {
  getAllDictionary,
  getDictionary,
  createDictionary,
} from "../controllers/dictionary.controllers.js";

const dictionaryRouter = Router();

//get all dictionaries
dictionaryRouter.get("/", getAllDictionary);

//get single dictionary
dictionaryRouter.get("/:id", getDictionary);

//create a new dictionary
dictionaryRouter.post("/", createDictionary);

dictionaryRouter.put("/:id", (req, res) =>
  res.json({ message: "PUT data by id" })
);

dictionaryRouter.delete("/:id", (req, res) =>
  res.json({ message: "DELETE data by id" })
);

export default dictionaryRouter;
