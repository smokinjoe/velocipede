import express from "express";

import { asyncHandler } from "../utils/asyncHandler";

import login from "./auth/login";
import logout from "./auth/logout";
import checkSession from "./auth/checkSession";

import me from "./users/me";
import workouts from "./users/workouts";

const router = express.Router();

router.use("/auth", [
  asyncHandler(login),
  asyncHandler(logout),
  asyncHandler(checkSession),
]);

router.use("/api", [asyncHandler(me), asyncHandler(workouts)]);

export default router;
