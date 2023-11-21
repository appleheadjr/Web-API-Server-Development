const express = require('express');
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser} = require('../controllers/user');
const router = express.Router(); //instead of app


//replaced app with router and removed /user
//router.get('/', handleGetAllUsers);

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);




// since path is same we route get put and delete
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

//router.post('/' , handleCreateNewUser);

module.exports = router;
