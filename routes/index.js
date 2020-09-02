
const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
let mongodb = require('mongodb');
const { render } = require('../app');
const router = express.Router();
const Registration = mongoose.model('Registration');
let db
router.get('/', function(req, res){
  res.render('loggedin.ejs')
})
router.post('/orderpage.ejs',function(req, res){
  res.render('orderpage.ejs')
})
router.get('/order', (req, res) => {
    res.render('form', { title: 'Registration form' });
  });

  router.post('/',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
      check('address')
      .isLength({ min: 1 })
      .withMessage('please enter your address properly'),
      check('order')
      .isLength({ min: 1 })
      .withMessage('please specify your order'),
      check('number')
      .isLength({  max:11 })
      .withMessage('please input phone number'),
      check('number')
      .isLength({  min:1 })
      .withMessage('you did not specify the amount you want'),

  ],
  (req, res) => {
    const errors = validationResult(req);
    

    if (errors.isEmpty()) {
        const registration = new Registration(req.body);
        registration.save()
          .then(() => { res.send(`<!DOCTYPE html>
          <html lang="en"><!-- Basic -->
          <head>
            <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">   
             
              <!-- Mobile Metas -->
              <meta name="viewport" content="width=device-width, initial-scale=1">
           
               <!-- Site Metas -->
              <title>Live Dinner Restaurant - Responsive HTML5 Template</title>  
              <meta name="keywords" content="">
              <meta name="description" content="">
              <meta name="author" content="">
          
              <!-- Site Icons -->
              <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
              <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
          
              <!-- Bootstrap CSS -->
              <link rel="stylesheet" href="css/bootstrap.min.css">    
            <!-- Site CSS -->
              <link rel="stylesheet" href="css/style.css">    
              <!-- Responsive CSS -->
              <link rel="stylesheet" href="css/responsive.css">
              <!-- Custom CSS -->
              <link rel="stylesheet" href="css/custom.css">
          
              <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
              <![endif]-->
          
          </head>
          
          <body>
            <!-- Start header -->
          	<header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="/">
					<img src="images/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="menu.html">Menu</a></li>
						
					
						<li class="nav-item"><a class="nav-link" href="/orderpage.ejs">order</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
              <!-- End header -->
              
              <!-- Start All Pages -->
            <div class="all-page-title page-breadcrumb">
              <div class="container text-center">
                <div class="row">
                  <div class="col-lg-12">
                    <h1>sucess!</h1>
                  </div>
                </div>
              </div>
            </div>
            <!-- End All Pages -->
            
            <!-- Start Contact -->
            <div class="jumbotron">
              
                  <p class="lead">thank you for choosing instantfoods!</p>
                  <hr class="my-4">
                  <p><strong>your order request has been recieved we will call you in a few minutes to confirm your order</strong></p>
                  <p class="lead">
                    <a class="btn btn-lg btn-circle btn-outline-new-white" href="/" role="button">back to home page</a>
                  </p>
                </div>
          
            
            <!-- End Contact -->
            <!-- Start Contact info -->
            <div class="contact-imfo-box">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 arrow-right">
                    <i class="fa fa-volume-control-phone"></i>
                    <div class="overflow-hidden">
                      <h4>Phone</h4>
                      <p class="lead">
                        +01 123-456-4590
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 arrow-right">
                    <i class="fa fa-envelope"></i>
                    <div class="overflow-hidden">
                      <h4>Email</h4>
                      <p class="lead">
                        yourmail@gmail.com
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <i class="fa fa-map-marker"></i>
                    <div class="overflow-hidden">
                      <h4>Location</h4>
                      <p class="lead">
                        800, Lorem Street, US
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Contact info -->
            
            <!-- Start Footer -->
            <footer class="footer-area bg-f">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <h3>About Us</h3>
                    <p>Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui.</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <h3>Subscribe</h3>
                    <div class="subscribe_form">
                      <form class="subscribe_form">
                        <input name="EMAIL" id="subs-email" class="form_input" placeholder="Email Address..." type="email">
                        <button type="submit" class="submit">SUBSCRIBE</button>
                        <div class="clearfix"></div>
                      </form>
                    </div>
                    <ul class="list-inline f-social">
                      <li class="list-inline-item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <h3>Contact information</h3>
                    <p class="lead">Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
                    <p class="lead"><a href="#">+01 2000 800 9999</a></p>
                    <p><a href="#"> info@admin.com</a></p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <h3>Opening hours</h3>
                    <p><span class="text-color">Monday: </span>Closed</p>
                    <p><span class="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
                    <p><span class="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
                    <p><span class="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
                  </div>
                </div>
              </div>
              
              <div class="copyright">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <p class="company-name">All Rights Reserved. &copy; 2018 <a href="#">Live Dinner Restaurant</a> Design By : 
                    <a href="https://html.design/">html design</a></p>
                    </div>
                  </div>
                </div>
              </div>
              
            </footer>
            <!-- End Footer -->
            
            <a href="#" id="back-to-top" title="Back to top" style="display: none;"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></a>
          
            <!-- ALL JS FILES -->
            <script src="js/jquery-3.2.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
              <!-- ALL PLUGINS -->
            
            <script src="js/jquery.superslides.min.js"></script>
            <script src="js/images-loded.min.js"></script>
            <script src="js/isotope.min.js"></script>
            <script src="js/baguetteBox.min.js"></script>
            <script src="js/jquery.mapify.js"></script>
            <script src="js/form-validator.min.js"></script>
              <script src="js/contact-form-script.js"></script>
              <script src="js/custom.js"></script>
            <script>
              $('.map-full').mapify({
                points: [
                  {
                    lat: 40.7143528,
                    lng: -74.0059731,
                    marker: true,
                    title: 'Marker title',
                    infoWindow: 'Live Dinner Restaurant'
                  }
                ]
              });	
            </script>
          </body>
          </html>`); })
          .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
          });
     
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);
router.delete('/items/:id', (req, res) => {
  db.collection('items').remove({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
    if (err) return console.log(err)
    console.log(req.body)
    res.redirect('/')
  })
})
router.post('/delete-item', function(req, res) {
  db.collection('registration').deleteOne({_id: new mongodb.ObjectId(req.body.id)}, function() {
    res.send("Success")
  })
})
router.get('/nicom', (req, res) => {
    Registration.find()
      .then((registrations) => {
        res.render('index', { title: 'Listing registrations', registrations });
      })
      .catch(() => { res.send('Sorry! Something went wrong.'); });
  });
  router.get('/orderpage.ejs', function(req, res){
    res.render('orderpage.ejs')
  })

module.exports = router;