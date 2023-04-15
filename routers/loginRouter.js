//external imports

const express = require("express");
const router = express.Router();

//internal imports
const { getLogin } = require("../controller/logincontroller");

const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


//login page

router.get('/',decorateHtmlResponse('Login'),getLogin)

module.exports = router;