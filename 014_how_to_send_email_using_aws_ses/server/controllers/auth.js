import * as config from "../config.js";

export const welcome = (req, res) => {
  res.json({
    data: "hello from nodejs api from routes yay",
  });
};

export const preRegister = async (req, res) => {
  // create jwt with email and password then email as clickable link
  // only when user click on that email link, registeration completes
  try {
    console.log(req.body);

    config.AWSSES.sendEmail(
      {
        Source: config.EMAIL_FROM,
        Destination: {
          ToAddresses: ["merncms@gmail.com"],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
                <h1>Welcome to Realist App</h1>
              `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Welcome to Realist",
          },
        },
      },
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
