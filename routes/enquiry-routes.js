const express = require('express');
const {getEnquiries,getAllEnquiries,postEnquiries,patchEnquiries,showwelcomeMessage} = require('../controllers/enquiryController');
const AuthMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.get('/getEnquiries', getEnquiries);
router.get('/getAllEnquiries', getAllEnquiries);
router.post('/postEnquiries', postEnquiries);
router.patch('/patchEnquiries/:id', patchEnquiries);
router.get('/', showwelcomeMessage);

module.exports = {
    routes: router
}