import Instructor from "../models/instructor.model";

export async function createInstructor(req, res) {
  const instructor = await Instructor.find({});

  if (!instructor) {
    return res.sendStatus(200);
  }

  renderPage(
    res,
    "instructor",
    "main",
    { msg: "CREATED" },
    { title: "instructors" }
  );
}

export async function getAllInstructors(req, res) {
  res.status(200).json({ msg: "All instructors" });
}

export async function getOneInstructor(req, res) {
  const instructorId = req.param.id;
  res.status(200).json({ msg: "All instructors", instructorId });
}
export async function getInstructorsForDepartment(req, res) {
  const deptId = req.param.id;
  res.status(200).json({ msg: "All instructors", deptId });
}

export async function UpdateOneinstructor(req, res) {
  const instructorId = req.param.id;
  res.status(200).json({ msg: "All instructors", instructorId });
}
export async function DeleteOneinstructor(req, res) {
  const instructorId = req.param.id;
  res.status(200).json({ msg: "All instructors", instructorId });
}
