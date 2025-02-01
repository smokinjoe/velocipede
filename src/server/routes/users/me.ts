import express from "express";
import { handleResponse } from "@/server/utils/handleResponse";
import { mapMe } from "@/server/mappers/meMapper";

const router = express.Router();

router.get("/me", async (req, res) => {
  const response = await fetch("https://api.onepeloton.com/api/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `peloton_session_id=${req.query.session_id}`,
    },
  });

  handleResponse(res, response, mapMe);
});

export default router;
