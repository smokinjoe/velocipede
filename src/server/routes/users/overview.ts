import express from "express";
import { handleResponse } from "@/server/utils/handleResponse";
import { overviewMapper } from "@/server/mappers/overviewMapper";

const router = express.Router();

router.get("/overview", async (req, res) => {
  const response = await fetch(
    `https://api.onepeloton.com/api/user/${req.query.user_id}/overview?version=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `peloton_session_id=${req.query.session_id}`,
        "Peloton-Platform": "web",
      },
    }
  );
  handleResponse(res, response, overviewMapper);
});

export default router;
