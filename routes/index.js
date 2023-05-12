import { Router } from "express";
import { isAuthenticated, Login, RenderLogin } from "../controllers/auth.controller.js";
import { studentDashboard } from "../controllers/dashboard.js";
import passport from "../utils/passport.js";

const router = Router()

router.get('/hello', (req, res) => {
    res.status(200).send('hello')
    res.end()
})
router.route('/login')
    .get(RenderLogin)
    .post(passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    }))

router.route('/dashboard/student').get(studentDashboard)
export default router;  