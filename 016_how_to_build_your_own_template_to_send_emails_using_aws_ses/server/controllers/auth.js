import * as config from "../config.js";
import jwt from "jsonwebtoken";
import { emailTemplate } from "../helpers/email.js";

export const welcome = (req, res) => {
  res.json({
    data: "hello from nodejs api from routes yay",
  });
};

export const preRegister = async (req, res) => {
  // create jwt with email and password then email as clickable link
  // only when user click on that email link, registeration completes
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    const token = jwt.sign({ email, password }, config.JWT_SECRET, {
      expiresIn: "1h",
    });

    config.AWSSES.sendEmail(
      emailTemplate(
        email,
        `
      <p>Please click the link below to activate your account.</p>
      <a href="${config.CLIENT_URL}/auth/account-activate/${token}">Activate my account</a>
      `,
        config.REPLY_TO,
        "Activate your acount"
      ),
      (err, data) => {
        if (err) {
          console.log(err);
          return res.json({ ok: false });
        } else {
          console.log(data);
          return res.json({ ok: true });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong. Try again." });
  }
};

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = jwt.verify(req.body.token, config.JWT_SECRET);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong. Try again." });
  }
};
