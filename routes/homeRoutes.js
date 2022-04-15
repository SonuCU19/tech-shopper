const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { isLoggedIn} = require('../middleware');

// Get Home Page
router.get('/', async(req,res)=>{

    try {

        const swiper = await Product.find({category:{$eq:'swiper'}});
        const arrival = await Product.find({category:{$eq:'new'}});
       
        res.render('home',{swiper,arrival});
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }

   
});

router.get('/contact', (req,res)=>{

   res.render('contact'); 
});

router.get('/about', (req,res)=>{

    res.render('about'); 
 });


module.exports = router;