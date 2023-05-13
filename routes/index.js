import { Router } from "express";
import authRouter from "./auth.routes.js";
import courseRouter from "./courses.routes.js";

const router = Router();

router.use([authRouter, courseRouter]);
export default router;
