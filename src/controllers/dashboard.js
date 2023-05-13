import renderPage, {
  instructorDashboardOptions,
  studentDashboardOptions,
} from "../utils/renderer.helper.js";

export function studentDashboard(req, res) {
  console.log(res.locals);
  renderPage(res, "dashboard", "dashboard", studentDashboardOptions, {
    ...res.locals,
  });
}

export function instructorDashboard(res, responseOption) {
  renderPage(
    res,
    "dashboard",
    "dashboard",
    instructorDashboardOptions,
    responseOption
  );
}

export function render(params) {}
