import dotenv from "dotenv";
dotenv.config();
import amqp from "amqplib";
import queue from "./queue";

async function main() {
  try {
    const amqpConnection = await amqp.connect("amqp://127.0.0.1");
    const channel = await amqpConnection.createChannel();

    queue({ channel });

    console.log(`Notification Service is running`);
  } catch (error) {
    setInterval(() => {
      main();
    }, 1000);
  }
}

main();
