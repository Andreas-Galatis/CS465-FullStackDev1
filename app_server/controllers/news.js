/* GET News view */
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {
        title: pageTitle,
        isNewsPage: true
    });
};

module.exports = {
    news
};