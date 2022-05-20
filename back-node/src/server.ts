import { prisma } from "./prisma";
import express from "express";

const app = express();
app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ message: "feedback created", data: feedback });
});

app.listen(3333, () => {
  console.log("Server started on port http://localhost:3333 !");
});
