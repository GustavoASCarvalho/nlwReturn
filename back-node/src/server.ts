import { routes } from "./routes";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port http://localhost:3333 !");
});
