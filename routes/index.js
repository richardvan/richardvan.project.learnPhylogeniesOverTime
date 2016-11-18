var express = require('express');
var router = express.Router();

var Specimen = require("../models/specimen.js");

/////////////////////////////

/////////////////////////////
//////// Coding Begins Below

//var Phylocanvas = require('phylocanvas');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	// TODO - parse list of phylogenies, make a nice looking one of what i've learned
	var specimensToReturn = [];
	

  res.render('index', { 
										title: 'Phylocanvas Specimen' ,
										specimens: specimensToReturn
											});
	console.log("<< hello, it's me");
	console.log("<< delta niner, delta niner, this is rave");
});



module.exports = router;
