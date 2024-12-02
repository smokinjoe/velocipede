import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
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

export default router;
