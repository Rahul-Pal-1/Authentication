const express = require("express");
const router = express.Router();

const {
    handleGetAllUser,

} = require('../controler/user')

router.route('/')
.get(handleGetAllUser)


//? TODO complete these operation
// router.route('/id')
// .get(handleGetUserById)
// .put(handleAddToUser)
// .patch(handleUpdateUser)

module.exports = router;