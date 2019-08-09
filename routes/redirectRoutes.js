const express = require('express'),
      router  = express.Router();

router.get('/', (req,res) => {
    req.session.fromMenu = true;
    res.redirect('/');
}); 
      
router.get('/products', (req,res) => {
    req.session.fromMenu = true;
    res.redirect('/products');
});

router.get('/portfolio', (req,res) => {
    req.session.fromMenu = true;
    res.redirect('/portfolio');
}); 

router.get('/hire', (req,res) => {
    req.session.fromMenu = true;
    res.redirect('/hire');
}); 

router.get('/information', (req,res) => {
    req.session.fromMenu = true;
    res.redirect('/information');
});

module.exports = router;