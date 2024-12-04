import express from "express";
import { handleResponse } from "../../utils/handleResponse";
import { PelotonUserSession } from "../../types/PelotonUserSession";
import { UserSession } from "../../../common/types/UserSession";

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

  const cookies = response.headers.get("set-cookie");
  handleResponse<PelotonUserSession, UserSession>(res, response, (data) => ({
    userId: data.user_id,
    sessionId: data.session_id,
    isLoggedIn: true,
    cookies,
  }));
});

export default router;
