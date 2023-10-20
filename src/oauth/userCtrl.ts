import sendEmail from "./sendMail";
import { Request, Response } from "express";
// const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

// const { CLIENT_URL } = process.env;

interface UserCtrl {
  notification: (req: Request, res: Response) => Promise<any>;
}

const userCtrl: UserCtrl = {
  notification: async (req: Request<any>, res: Response<any>) => {
    try {
      const email: string = "ngohuydn123@gmail.com";

      const url: string = "";

      const info = await sendEmail(email, url, "Notification!");
      res.json({ msg: "successful!" });
    } catch (e: any) {
      return res.status(500).json({ msg: e.message });
    }
  },
};

export default userCtrl;
