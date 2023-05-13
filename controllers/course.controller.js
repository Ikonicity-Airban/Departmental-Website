import Course from "../models/course.model.js";
import renderPage from "../utils/renderer.helper.js";

export async function createCourse(req, res) {
  const course = await Course.find({});

  if (!course) {
    return res.sendStatus(200);
  }

  renderPage(res, "course", "main", { msg: "CREATED" }, { title: "Courses" });
}

export async function getAllCourses(req, res) {
  res.status(200).json({ msg: "All courses" });
}
export async function getCoursesForStudent(req, res) {
  const { studentId } = req.params;
  res.status(200).json({ msg: "All courses", studentId });
}

export async function getOneCourse(req, res) {
  const { courseId } = req.params;
  res.status(200).json({ msg: "All courses", courseId });
}
export async function getCoursesForDepartment(req, res) {
  const { deptId } = req.params;
  res.status(200).json({ msg: "All courses", deptId });
}

export async function updateOneCourse(req, res) {
  const { courseId } = req.params;
  res.status(200).json({ msg: "All courses", courseId });
}
export async function deleteOneCourse(req, res) {
  const { courseId } = req.params.id;
  res.status(200).json({ msg: "All courses", courseId });
}
