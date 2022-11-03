/* GET Rooms view */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {
        title: pageTitle,
        isRoomsPage : true
    });
};

module.exports = {
    rooms
};