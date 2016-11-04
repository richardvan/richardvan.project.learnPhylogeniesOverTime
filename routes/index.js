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
	
//	// [	DOMAIN: Animalia]
//	var newSpecimenAnimalia = new Specimen("sponge");
//	newSpecimen._classification_phylum = "Porifera";
//	specimensToReturn.push (newSpecimen);	
	
	//    p [---] TODO list here (remove later)
//    p       - input species for this weeks lab
//    p       - read from a file, should be in order
//    p       - add roots under very small
//    p       - connect them and understand newark method better
////	
//	var newSpecimenAnimalia = new Specimen("sponge");
//	newSpecimen._classification_phylum = "Porifera";
//	specimensToReturn.push (newSpecimen);
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Cnidaria", "Hydra", ""));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Cnidaria", "Metridium", ""));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Platyhelminthes", "Dugesia", "planaria (flatworm)"));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Nematoda", "Trichinella", "pork worm (roundworm)"));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Nematoda", "Ascaris", "small intestinal roundworm"));
//	
//	// Protosomes
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Mollusca", "CLASS"));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Annelida", "Lumbricus", "earthworm"));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Arthropoda", "Limulus", "horseshoe crab"));
//	specimensToReturn.push(new Specimen("Eukarya", "Animalia", "Arthropoda", "Limulus", "spider"));
//	var newSpecimen = new Specimen("Eukarya", "Animalia", "Arthropoda", "Limulus", "horseshoe crab")
//	newSpecimen._classification_subphylum = "Chelicerata";
//	specimensToReturn.push(newSpecimen);
//	var newSpecimen2 = new Specimen("Eukarya", "Animalia", "Arthropoda", "Limulus", "spider")
//	newSpecimen2._classification_subphylum = "Arachnida";
//	specimensToReturn.push(newSpecimen2);
	
	// Deuterostomes
//	var specimenToadd2 = new Specimen(35);

																	
	
	// TODO read from a file - test with a few for now
//	specimenToadd.classification_domain = "Eukarya";
//	specimenToadd.classification_kingdom = "Animalia";
//	specimenToadd.classification_phylum = "Porifera";
	
													 
													 
	
  res.render('index', { 
										title: 'Phylocanvas Specimen' ,
										specimens: specimensToReturn
											});
	console.log("<< hello, it's me");
	console.log("<< delta niner, delta niner, this is rave");
});



module.exports = router;
