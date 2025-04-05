import express from "express";
import { PORT, NODE_ENV } from "./config/env.js";
import dictionaryRouter from "./routes/dictionary.routes.js";
import connectDB from "./database/mongodb.js";
import path from "path";
import buodRouter from "./routes/buod.routes.js";

//env
const port = PORT || 4000;

const app = express();

const __dirname = path.resolve();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//routes
app.use("/api/dictionary", dictionaryRouter);
app.use("/api/buod", buodRouter);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  connectDB();
});
