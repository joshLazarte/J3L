const express = require('express'),
      router  = express.Router();
      
let infoPage = false;
      
function determineOrigin(localVar) {
    let fromMenu = false;
    if(localVar === true) {
        fromMenu = true;
    }
    return fromMenu;
}      
      
router.get('/', (req,res) => {
    const fromMenu = determineOrigin(req.session.fromMenu);
    req.session.fromMenu = false;
    res.render('index', {fromMenu, infoPage});
}); 
      
router.get('/products', (req,res) => {
    const fromMenu = determineOrigin(req.session.fromMenu);
    req.session.fromMenu = false;
    res.render('products', {fromMenu, infoPage});
});

router.get('/portfolio', (req,res) => {
    const fromMenu = determineOrigin(req.session.fromMenu);
    req.session.fromMenu = false;
    res.render('portfolio', {fromMenu, infoPage});
}); 

router.get('/hire', (req,res) => {
    const fromMenu = determineOrigin(req.session.fromMenu);
    req.session.fromMenu = false;
    res.render('hire', {fromMenu, infoPage});
}); 

router.get('/information', (req,res) => {
    const fromMenu = determineOrigin(req.session.fromMenu);
    infoPage = true;
    req.session.fromMenu = false;
    res.render('information', {fromMenu, infoPage});
});  
     
module.exports = router;