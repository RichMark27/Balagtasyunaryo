import { Router } from "express";
import {
  getAllDictionary,
  getDictionary,
  createDictionary,
  updateDictionary,
  deleteDictionary,
} from "../controllers/dictionary.controllers.js";

const dictionaryRouter = Router();

//get all dictionaries
dictionaryRouter.get("/", getAllDictionary);

//get single dictionary
dictionaryRouter.get("/:id", getDictionary);

//create a new dictionary
dictionaryRouter.post("/", createDictionary);

dictionaryRouter.patch("/:id", updateDictionary);

dictionaryRouter.delete("/:id", deleteDictionary);

export default dictionaryRouter;
