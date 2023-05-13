import User from "../models/student.model.js";
import renderPage from "../utils/renderer.helper.js";

//log in
export async function Login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.sendStatus(403);
  }
  const user = await User.findOne({ email });
  if (!user) return res.sendStatus(404);
  else if (user.password !== password) return res.sendStatus(404);
  // RenderLogin(req, res, {
  //   msg: "success",
  //   user,
  // });
  res.locals.user = user.toJSON();
  res.locals.msg = "success";
  console.log(res.locals);

  res.redirect("dashboard/student");
}
//sign up
export async function CreateAccount(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(403);
  }

  const user = await User.create({ email, password });
  res.json({ msg: "account created", user });
}
// Handle login requests

// Protect dashboard route with authentication middleware
export function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

export function RenderLogin(req, res, msg = {}) {
  res.render("login", {
    title: "Login",
    ...msg,
    user: {
      role: "student",
    },
    inputs: [
      {
        label: "Email address",
        type: "email",
        icon: "account",
        placeholder: `John Doe`,
      },
      {
        label: "Password",
        icon: "lock",
        type: "password",
        placeholder: "1234",
      },
    ],
  });
}
