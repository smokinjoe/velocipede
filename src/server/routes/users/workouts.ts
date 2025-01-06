import express from "express";
import { handleResponse } from "../../utils/handleResponse";
import { workoutMapper } from "../../mappers/workoutMapper";

const router = express.Router();

router.get("/workouts", async (req, res) => {
  const response = await fetch(
    `https://api.onepeloton.com/api/user/${req.query.user_id}/workouts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `peloton_session_id=${req.query.session_id}`,
      },
    }
  );
  handleResponse(res, response, workoutMapper);
});

export default router;
