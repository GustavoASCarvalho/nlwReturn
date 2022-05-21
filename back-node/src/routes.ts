import express from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrimaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { NodeMailerMailAdapter } from "./adapters/node-mailer/node-mailer-mail-adapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbackRepository = new PrimaFeedbackRepository();
  const nodeMailerMailAdapter = new NodeMailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerMailAdapter
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});
