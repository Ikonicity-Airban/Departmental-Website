import User from "../models/user.model.js";

//log in
export async function Login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.sendStatus(403);
  }
  const user = await User.findOne({ email });
  console.log("🚀 ~ file: auth.controller.js:12 ~ Login ~ user:", user);

  if (!user) return res.sendStatus(404);
  else if (user.password !== password) return res.sendStatus(404);
  res.json({ msg: "account created", user });
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

export function RenderLogin(req, res) {
  res.render("login", {
    title: "Login",
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
