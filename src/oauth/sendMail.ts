import nodemailer from "nodemailer";
import { google, Auth } from "googleapis";

const getMailerConfig = () => {
  return {
    MAILING_SERVICE_CLIENT_ID: process.env.MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET: process.env.MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN: process.env.MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS: process.env.SENDER_EMAIL_ADDRESS,
    OAUTH_PLAYGROUND: process.env.OAUTH_PLAYGROUND,
  };
};

const oauthClient = new google.auth.OAuth2(
  getMailerConfig().MAILING_SERVICE_CLIENT_ID,
  getMailerConfig().MAILING_SERVICE_CLIENT_SECRET,
  getMailerConfig().OAUTH_PLAYGROUND
);

// send mail
const sendEmail = async (email: string, url: string, txt: string) => {
  oauthClient.setCredentials({
    refresh_token: getMailerConfig().MAILING_SERVICE_REFRESH_TOKEN,
  });

  const ACCESS_TOKEN = await oauthClient.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: getMailerConfig().SENDER_EMAIL_ADDRESS,
      clientId: getMailerConfig().MAILING_SERVICE_CLIENT_ID,
      clientSecret: getMailerConfig().MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: getMailerConfig().MAILING_SERVICE_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: getMailerConfig().SENDER_EMAIL_ADDRESS,
    to: email,
    subject: "DTU Admission Department",
    html: `Hi there you are sucessful register!`,
  };

  await smtpTransport.sendMail(mailOptions);
};

export default sendEmail;
