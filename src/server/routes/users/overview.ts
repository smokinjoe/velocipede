import express from "express";
import { handleResponse } from "../../utils/handleResponse";
import { overviewMapper } from "../../mappers/overviewMapper";

const router = express.Router();

router.get("/overview", async (req, res) => {
  const response = await fetch(
    `https://api.onepeloton.com/api/user/${req.query.user_id}/overview?version=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `peloton_session_id=${req.query.session_id}`,
      },
    }
  );
  handleResponse(res, response, overviewMapper);
});

export default router;
