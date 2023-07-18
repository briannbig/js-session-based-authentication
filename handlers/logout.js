module.exports = function LogoutHandler(req, res) {
    req.session.destroy();
    res.redirect('/');
};