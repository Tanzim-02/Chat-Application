//external imports

const express = require("express");
const router = express.Router();

//internal imports
const { getUsers } = require("../controller/userController");
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

//User page

router.get('/',decorateHtmlResponse('User'),getUsers)

module.exports = router;