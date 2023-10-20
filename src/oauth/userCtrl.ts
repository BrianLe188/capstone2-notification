import sendEmail from "./sendMail";
import { Request, Response } from "express";
// const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

// const { CLIENT_URL } = process.env;

interface UserCtrl {
  forgotPassword: (req: Request, res: Response) => Promise<any>;
}

const userCtrl: UserCtrl = {
  forgotPassword: async (req: Request<any>, res: Response<any>) => {
    try {
      const email: string = "ngohuydn123@gmail.com"; // Added type annotation

      const url: string = ""; // Added type annotation

      await sendEmail(email, url, "Notification!");
      res.json({ msg: "Hi" });
    } catch (e: any) {
      return res.status(500).json({ msg: e.message });
    }
  },
};

export default userCtrl;
