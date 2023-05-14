var express = require('express');
var router = express.Router();


const ctrlAbout = require('../controllers/about');

const ctrlBike = require('../controllers/bike');


router.get('/', ctrlBike.index);
// GET bike list
router.get('/list', ctrlBike.bikelists);

/* GET about page. */
router.get('/about', ctrlAbout.about);


/* GET particular bike. */
router.get('/bikes/:bikeid', ctrlBike.bikeInfo);

/* Add new bike. */
router.route('/new')
        .get(ctrlBike.addNewBike)
        .post(ctrlBike.doAddNewBike);

/* update bike. */
router.route('/update/:bikeid')
        .get(ctrlBike.updateBike)
        .post(ctrlBike.doUpdateNewBike);

/* delete bike. */
router.get('/delete/:bikeid', ctrlBike.deleteBike);

module.exports = router;
