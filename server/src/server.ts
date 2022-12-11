import express from "express";
import "express-async-errors";
import cors from "cors";
import { route } from "./routes/routes";
import { handleError } from "./utils/handleError";

const app = express();

app.use(express.json());
app.use(cors());

app.use(route);
app.use(handleError);

app.listen(3333, () => console.log("listening http://localhost:3333/"));
