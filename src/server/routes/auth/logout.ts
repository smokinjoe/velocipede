import express from "express";

const router = express.Router();

router.post("/logout", async (req, res) => {
  const { sessionId } = req.body;

  fetch("https://api.onepeloton.com/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id: sessionId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      /**
       * even if I get an error response, it still hits this .then()
       */
      res.send(data);
    });
});

export default router;
