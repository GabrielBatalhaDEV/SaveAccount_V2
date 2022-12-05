import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ msg: "Teste" });
});

app.listen(3333, () => console.log("listening port 3333"));
