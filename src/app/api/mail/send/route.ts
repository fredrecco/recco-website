"use server";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type MailBody = {
  from: string;
  name: string;
  message: string;
  to: string;
};

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const mail = Object.fromEntries(
      ["from", "to", "message", "name"].map((data) => [
        data,
        form.get(data) || "",
      ])
    ) as MailBody;

    const invalidFields = (Object.keys(mail) as Array<keyof MailBody>)
      .map((prop) => (!mail[prop] ? prop : ""))
      .filter((prop) => prop);

    if (invalidFields.length) {
      return NextResponse.json(
        {
          invalidFields,
          status: 400,
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${mail.name} <${mail.from}>`,
      to: mail.to,
      subject: `${mail.name} - ${mail.from}`,
      text: mail.message,
    });

    return NextResponse.json({ status: 200 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
