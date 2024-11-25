"use server";

import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import nodemailer from "nodemailer";
import { promise } from "zod";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const contactFormSuccessTemplate = ({ email, message, name }: { name: string; email: string; message: string }) => {
  return `
    <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>mail from vidhanshu for contacting him...</title>
  
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  
              * {
                  padding: 0;
                  margin: 0;
  
                  text-decoration: none;
                  font-family: Inter, Roboto, Ubuntu, sans-serif;
                  font-size: 16px;
              }
  
              .root {
                  max-width: 750px;
                  color: black;
              }
              .root div {
                  padding: 10px 0;
              }
  
              .root div.quote {
                  padding-left: 15px;
                  padding: 10px 15px;
                  border-left: 2px solid grey;
                  margin-left: 5px;
                  color: grey;
              }
  
              a,
              a:hover,
              a:active,
              a:visited,
              a:focus {
                  font-weight: 600;
                  color: black;
                  text-decoration: underline;
              }
  
              img {
                margin: 0 auto;
                display: block;
              }
          </style>
      </head>
      <body>
          <div class="root">  
              <div>
                  <p>Hi <a href="mailto:${email}">${name}</a>!</p>
              </div>
  
              <div>
                  <p>
                      Thanks for contacting me! I am glad that you got to this
                      point. I look forward to communicating with you and will
                      respond very soon. Till then, you can also connect with me
                      on
                      <a href="${LINKEDIN_URL}">LinkedIn</a>
                      for more robust communication.
                  </p>
              </div>
  
              <div>
                  <p>Regards,</p>
                  <p>
                      <a href="${GITHUB_URL}">Vidhanshu Borade</a>
                  </p>
                  <p>Developer</p>
              </div>
  
              <div></div>
  
              <div class="quote">
                  <p>Your Message -</p>
                  <p>${message.replaceAll("\\n", "<br />")}</p>
              </div>
          </div>
      </body>
  </html>
      `;
};

const contactDetailsFormTemplate = ({ email, message, name, company, website }: { name: string; email: string; message: string; company?: string; website?: string }) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
        }
        .details {
            margin-bottom: 20px;
        }
        .details p {
            margin: 5px 0;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="details">
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${website ? `<p><strong>Website:</strong> <a href="{{website}}" target="_blank">{{website}}</a></p></p>` : ""}
        </div>
        <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p><a href="https://vidhanshu-borade.vercel.app">Visit Portfolio</a></p>
        </div>
    </div>
</body>
</html>
`;

export const sendContactEmail = async (data: { name: string; email: string; message: string; company?: string; website?: string }) => {
  try {
    Promise.all([
      await transport.sendMail({
        from: data.email,
        to: process.env.EMAIL,
        subject: `Portfolio: received contact form submission from ${data.name}`,
        html: contactDetailsFormTemplate(data),
      }),
      await transport.sendMail({
        from: process.env.EMAIL,
        to: data.email,
        cc: process.env.EMAIL,
        subject: "Thanks for reaching out!",
        html: contactFormSuccessTemplate(data),
      }),
    ]);
    return { message: "Email sent successfully" };
  } catch (error) {
    return { error: true, message: error as string };
  }
};
