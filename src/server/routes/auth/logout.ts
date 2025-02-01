import express from "express";
import { handleResponse } from "@/server/utils/handleResponse";

const router = express.Router();

router.post("/logout", async (req, res) => {
  const { sessionId } = req.body;

  const response = await fetch("https://api.onepeloton.com/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id: sessionId,
    }),
  });

  handleResponse(res, response, (data) => data);
});

export default router;
