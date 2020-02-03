const renderHomeHtml = (req, res, next) => {
    res.render('home',{});
};

const renderAboutUsHtml = (req,res,next) => { 
    res.render('aboutUs',{ pageTitle: 'About Us'});
};


module.exports = { renderHomeHtml, renderAboutUsHtml };