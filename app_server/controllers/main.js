const index = (req, res) => { 
    res.render('index', {title: 'travlr getaways'});
};

module.exports = {
    index
};