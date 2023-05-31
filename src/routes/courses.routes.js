const router = require("express").Router();
const {
  GetAllCourses,
  CreateCourse,
  GetOneCourse,
  UpdateOneCourse,
  DeleteOneCourse,
} = require("../controllers/course.controller");
const { authorizeRoles } = require("../middlewares/auth");

router.route("/").post(authorizeRoles("admin", "instructor"), CreateCourse);

router
  .route("/:courseId")
  .get(GetOneCourse)
  .patch(authorizeRoles("admin", "instructor"), UpdateOneCourse)
  .delete(authorizeRoles("admin", "instructor"), DeleteOneCourse);

//export
module.exports = router;
