/* GET Contact view */
const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Contact';
    res.render('contact', {
        title: pageTitle,
        isContactPage: true
    });
};

module.exports = {
    contact
};