/* GET Meals view */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {
        title: pageTitle,
        isMealsPage: true
    });
};

module.exports = {
    meals
};