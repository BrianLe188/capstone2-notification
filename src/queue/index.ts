import { Channel, Message } from "amqplib";
import sendEmail from "../oauth/sendMail";

const queue = async ({ channel }: { channel: Channel }) => {
  const mailQueue = "mail_queue";

  await channel.assertQueue(mailQueue);

  channel.consume(
    mailQueue,
    (msg) => {
      if (msg?.content) {
        const { email, cccd, application } = JSON.parse(msg.content.toString());
        if (email && cccd && application) {
          sendEmail(email, application);
        }
      }
    },
    {
      noAck: true,
    }
  );
};

export default queue;
