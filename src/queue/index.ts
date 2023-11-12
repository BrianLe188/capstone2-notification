import { Channel } from "amqplib";
import sendEmail from "../oauth/sendMail";

const queue = async ({ channel }: { channel: Channel }) => {
  const mailQueue = "mail_queue";

  await channel.assertQueue(mailQueue);

  channel.consume(
    mailQueue,
    (msg) => {
      if (msg?.content) {
        const { email, cccd, application, type } = JSON.parse(
          msg.content.toString()
        );
        if (email && cccd && application) {
          if (type === "apply_success") {
            sendEmail(email, application);
          }
          if (type === "congratuation") {
          }
        }
      }
    },
    {
      noAck: true,
    }
  );
};

export default queue;
