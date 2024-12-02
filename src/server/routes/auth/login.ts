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

  const response = await fetch("https://api.onepeloton.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  // TODO: Handle response better
  if (response.ok) {
    const data = await response.json();
    const cookies = response.headers.get("set-cookie");
    if (cookies) {
      res.setHeader("Set-Cookie", cookies);
    }
    res.send({
      ...data,
      cookies,
    });
  }
});

export default router;
