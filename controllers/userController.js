
const get_user_homepage = (req, res) => {
    res.render('user/home', { title: 'homepage' });
};

module.exports = {
    get_user_homepage
};