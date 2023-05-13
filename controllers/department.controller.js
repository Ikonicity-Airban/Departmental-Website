import Department from "../models/department.model.js";
import renderPage from "../utils/renderer.helper.js";

export async function createdepartment(req, res) {
  const department = await Department.find({});

  if (!department) {
    return res.sendStatus(200);
  }

  renderPage(
    res,
    "department",
    "main",
    { msg: "CREATED" },
    { title: "departments" }
  );
}

export async function getAlldepartments(req, res) {
  res.status(200).json({ msg: "All departments" });
}
export async function getStudentInDepartment(req, res) {
  const { studentId } = req.param;
  res.status(200).json({ msg: "All departments", studentId });
}

export async function getOnedepartment(req, res) {
  const { departmentId } = req.param;
  res.status(200).json({ msg: "All departments", departmentId });
}

export async function UpdateOnedepartment(req, res) {
  const { departmentId } = req.param;
  res.status(200).json({ msg: "All departments", departmentId });
}
export async function DeleteOnedepartment(req, res) {
  const { departmentId } = req.param;
  res.status(200).json({ msg: "All departments", departmentId });
}
