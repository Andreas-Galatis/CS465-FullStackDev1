/* GET Travel view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {
        title: pageTitle, 
        isTravelPage : true
    });
};

module.exports = {
    travel
};