import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

import { getEnv } from "./server/utils/getEnv";
import { initReactEntry } from "./server/middleware/initReactEntry";

const environment = getEnv();
const port = process.env.PORT || 5173;

dotenv.config({ path: `.env.${environment}` });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/auth/login", async (req, res) => {
  const { username_or_email, password } = req.body;

  const body = {
    username_or_email:
      username_or_email === ""
        ? process.env.PELOTON_USERNAME
        : username_or_email,
    password: password === "" ? process.env.PELOTON_PASSWORD : password,
    with_pubsub: false,
  };

  fetch("https://api.onepeloton.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      /**
       * even if I get an error response, it still hits this .then()
       */
      res.send(data);
    });
});

// This is one of the final steps in the server setup due to the *all route
initReactEntry(app);

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
