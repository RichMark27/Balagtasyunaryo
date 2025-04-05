import { Router } from "express";
import {
  createBuod,
  getAllBuods,
  updateBuod,
  getBuod,
} from "../controllers/buod.controllers.js";

const buodRouter = Router();

//get all buod
buodRouter.get("/", getAllBuods);

//get single buood

buodRouter.get("/:id", getBuod);
//create buod
buodRouter.post("/", createBuod);
//updatebuod
buodRouter.patch("/:id", updateBuod);

//deletebuod

export default buodRouter;
