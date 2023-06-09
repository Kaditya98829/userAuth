const {registerUser, loginUser, getAllSUsers, userLogout, forgotPassword, resetPassword, update, deleteUserData} = require('../controller');
const isUserAuth = require('../utils/auth');
const cors = require('cors')
const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/users', isUserAuth, getAllSUsers);
router.post('/forgot/password', forgotPassword);
router.put('/reset/password/:token', resetPassword);
router.get('/user/logout', userLogout);
router.get('/temp', async(req, res) => {
    return res.status(200).json({
        success: true,
        data: 'Temp Found with CI and CD and '
    })
})
router.put('/update/user/:id', update);
router.delete('/delete/user/:id', deleteUserData);

module.exports = router;