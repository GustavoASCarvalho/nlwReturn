import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  FeedbackCreateData,
} from "../feedback-repository";

export class PrimaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
