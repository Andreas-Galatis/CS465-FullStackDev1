/* GET Main view */
const index = (req, res) => { 
    pageTitle = process.env.npm_package_description + ' - Main';
    res.render('index', {
        title: pageTitle,
        isHomePage: true
    });
};

module.exports = {
    index
};