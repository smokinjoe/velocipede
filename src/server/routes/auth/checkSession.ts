import express from "express";

const router = express.Router();

router.post("/checkSession", async (req, res) => {
  fetch("https://api.onepeloton.com/auth/check_session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
