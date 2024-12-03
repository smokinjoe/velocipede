import express from "express";

const router = express.Router();

router.get("/me", async (req, res) => {
  fetch("https://api.onepeloton.com/api/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `peloton_session_id=${req.query.session_id}`,
    },
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