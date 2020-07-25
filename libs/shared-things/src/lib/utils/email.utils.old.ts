import * as nodemailer from 'nodemailer';

export class Email {
  email;

  constructor() {

  }

  send(to: string, title: string, html: string): Promise<any> {
    console.log('process.env.EMAIL_HOST', process.env.EMAIL_HOST);
    this.email = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      pool: true,
      secure: false,
      port: 587,
      auth: {
        user: 'icandy3121',
        pass: 'mostra123',
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: true,
      },
    });

    return this.email.sendMail({
      from: 'blutv.dev <blutv.dev@gmail.com>',
      to,
      subject: title,
      text: title,
      html,
    });
  }
}