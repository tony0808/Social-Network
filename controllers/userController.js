
const get_user_homepage = (req, res) => {
    res.render('user/home', { title: 'homepage' });
};

const get_create_post_page = (req, res) => {
    res.render('post/create');
};


module.exports = {
    get_user_homepage,
    get_create_post_page
};