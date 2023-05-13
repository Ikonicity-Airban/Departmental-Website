import { Router } from "express";
import {
  createCourse,
  deleteOneCourse,
  getAllCourses,
  getCoursesForDepartment,
  getCoursesForStudent,
  getOneCourse,
  updateOneCourse,
} from "../controllers/course.controller.js";
const router = Router();

router.route("/courses").get(getAllCourses).post(createCourse);
router
  .get("/courses/students/:studentId", getCoursesForStudent)
  .get("/courses/departments/:deptId", getCoursesForDepartment);
router
  .route("courses/:courseId")
  .get(getOneCourse)
  .patch(updateOneCourse)
  .delete(deleteOneCourse);
//export
const courseRouter = router;
export default courseRouter;
