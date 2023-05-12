export function Login(req, res) {
    res.json({ msg: "logged in" });
}

export function CreateAccount(req, res) {
    res.json({ msg: "account created" })
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
    res.render('login', {
        title: "Login",
        user: {
            role: 'student'
        },
        inputs: [
            {
                label: "Email address",
                type: 'email',
                icon: 'account'
                ,
                placeholder: `John Doe`,
            },
            {
                label: "Password",
                icon: 'lock',
                type: "password",
                placeholder: "1234"
            }]

    })
}

