const showroomProfileDataCTRL = require('../controllers/showroomProfileCtrl');

const router = require('express').Router();

router.get('/getShowroomProfileData', showroomProfileDataCTRL.getShowroomProfileData);
router.post('/postShowroomProfileData', showroomProfileDataCTRL.postShowroomProfileData);
router.post('/updateShowroomProfileData', showroomProfileDataCTRL.updateShowroomProfileData);
router.get('/deleteShowroomProfileData', showroomProfileDataCTRL.deleteShowroomProfileData);
router.post('/updateCurrentInventoryName', showroomProfileDataCTRL.updateShowroomProfileCurrentInventoryName);



module.exports = router