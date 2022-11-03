/* GET About view */
const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';
    res.render('about', {
        title: pageTitle,
        isAboutPage: true
    });
};

module.exports = {
    about
};