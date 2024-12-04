import express from "express";

const router = express.Router();

router.get("/workouts", async (req, res) => {
  const response = await fetch(
    `https://api.onepeloton.com/api/user/${req.query.user_id}/workouts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Cookie: `peloton_session_id=${req.query.session_id}`,
      },
    }
  );
  // .then((response) => response.json())
  // .then((data) => {
  //   /**
  //    * even if I get an error response, it still hits this .then()
  //    */
  //   res.send(data);
  // });

  // Use whatever I come up with in login.ts here
  if (response.ok) {
    const data = await response.json();
    res.send({
      statusCode: response.status,
      data,
    });
  } else {
    const error = await response.json();
    res.status(response.status).send({
      statusCode: response.status,
      error,
    });
  }
});

export default router;
