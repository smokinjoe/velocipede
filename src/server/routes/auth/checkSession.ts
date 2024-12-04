import express from "express";
import { handleResponse } from "../../utils/handleResponse";

const router = express.Router();

router.post("/checkSession", async (req, res) => {
  const response = await fetch(
    "https://api.onepeloton.com/auth/check_session",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  handleResponse(res, response, (data) => data);
});

export default router;
