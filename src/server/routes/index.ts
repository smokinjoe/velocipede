import express from "express";

import { asyncHandler } from "@/server/utils/asyncHandler";

import login from "./auth/login";
import logout from "./auth/logout";
import checkSession from "./auth/checkSession";

import me from "./users/me";
import workouts from "./users/workouts";
import overview from "./users/overview";

const router = express.Router();

router.use("/auth", [
  asyncHandler(login),
  asyncHandler(logout),
  asyncHandler(checkSession),
]);

router.use("/api", [
  asyncHandler(me),
  asyncHandler(workouts),
  asyncHandler(overview),
]);

export default router;
