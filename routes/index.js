var express = require('express');
var router = express.Router();
//var Phylocanvas = require('phylocanvas');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { title: 'Expdress HE3LLo 3000 3' ,
											 	phylogenies: ["phylo1","phylo2","phlylo3"]
											});
	console.log("<< hello, it's me");
	console.log("<< delta niner, delta niner, this is rave");
});



module.exports = router;
