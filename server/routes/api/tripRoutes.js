const router = require("express").Router();
const {
  getAllTrips,
  getSingleTrip,
  createTrip,
  deleteTrip,
  editTrip,
} = require("../../controllers/tripControllers");


router.route("/").post(createTrip);

router.route("/trippage").get(getAllTrips);

router.route('/trippage/:id').get(getSingleTrip).put(editTrip).delete(deleteTrip);

module.exports = router;
