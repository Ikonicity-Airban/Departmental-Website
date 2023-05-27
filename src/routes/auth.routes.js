import { Router } from "express";
import {
  isAuthenticated,
  Login,
  RenderLogin,
} from "../controllers/auth.controller.js";
import { studentDashboard } from "../controllers/dashboard.js";

const router = Router();
router.route("/login").get(RenderLogin).post(Login);

//export
const authRouter = router;
export default authRouter;
