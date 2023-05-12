export default function four_oh_four(req, res) {
    ;
    res.status(404).render('404', {
        msg: `${req.path.replace('/', '')} page is not found`,
    })
}