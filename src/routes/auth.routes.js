import { Router } from "express";
import { Login, RenderLogin } from "../controllers/auth.controller.js";

const router = Router();
router.route("/login").get(RenderLogin).post(Login);

//export
const authRouter = router;
export default authRouter;
