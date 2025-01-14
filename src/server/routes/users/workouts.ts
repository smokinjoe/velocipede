import express from "express";
import { handleResponse } from "../../utils/handleResponse";
import { workoutsMapper } from "../../mappers/workoutsMapper";
import { workoutMapper } from "../../mappers/workoutMapper";

const router = express.Router();

router.get("/workouts", async (req, res) => {
  // TODO: Add error handling for when not present - because they should ALWAYS be present
  const pageQueryParam = `page=${req.query.page}`;
  const limitQueryParam = `&limit=${req.query.limit}`;
  const response = await fetch(
    `https://api.onepeloton.com/api/user/${req.query.user_id}/workouts?${pageQueryParam}${limitQueryParam}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `peloton_session_id=${req.query.session_id}`,
      },
    }
  );
  handleResponse(res, response, workoutsMapper);
});

router.get("/workouts/:id", async (req, res) => {
  console.log("ID: ", req.params.id);
  const response = await fetch(
    `https://api.onepeloton.com/api/workout/${req.params.id}?joins=ride,ride.instructor`,
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
