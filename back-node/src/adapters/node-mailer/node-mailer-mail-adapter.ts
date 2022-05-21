import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0ab0afca9ff54b",
    pass: "e01d97218f026e",
  },
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe <oi@feedget.com>",
      to: "Layla amor <policarpolayla@gmail.com>",
      subject,
      html: body,
    });
  }
}
