import express from "express";
import { handleResponse } from "../../utils/handleResponse";

const router = express.Router();

router.get("/me", async (req, res) => {
  const response = await fetch("https://api.onepeloton.com/api/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `peloton_session_id=${req.query.session_id}`,
    },
  });

  handleResponse(res, response, (data) => data);
});

export default router;
