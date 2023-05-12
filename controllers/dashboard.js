import renderPage, { studentDashboardOptions } from "../utils/renderer.helper.js";

export function studentDashboard(req, res) {
    renderPage(res, 'dashboard', 'main', studentDashboardOptions)
}