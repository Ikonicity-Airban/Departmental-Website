import { create } from "express-handlebars";
import helpers from "handlebars-helpers";

export default function setup(app, __dirname) {
    const hbs = create({
        // extname: ".hbs"
        helpers: helpers()
    });


    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    app.set("views", "./views");

    function exposeTemplates(req, res, next) {
        // Uses the `ExpressHandlebars` instance to get the get the **precompiled**
        // templates which will be shared with the client-side of the app.
        hbs.getTemplates("shared/templates/", {
            cache: app.enabled("view cache"),
            precompiled: true,
        }).then((templates) => {
            // RegExp to remove the ".handlebars" extension from the template names.
            const extRegex = new RegExp(hbs.extname + "$");

            // Creates an array of templates which are exposed via
            // `res.locals.templates`.
            templates = Object.keys(templates).map((name) => {
                return {
                    name: name.replace(extRegex, ""),
                    template: templates[name],
                };
            });

            // Exposes the templates during view rendering.
            if (templates.length) {
                res.locals.templates = templates;
            }

            setImmediate(next);
        })
            .catch(next);
    }

}