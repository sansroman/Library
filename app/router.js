module.exports = app => {
    const { router, controller } = app;

    router.post('/user/login',controller.userController.login);

    router.get('/user/logout',controller.userController.logout);
    
    router.post('/user/register',controller.userController.register);
    
    router.get('/user/question/:username',controller.userController.getQuestion);
    
    router.put('/user/resetPassword',controller.userController.resetPassword);
    
    router.post('/user/forgetCheckPassword',controller.userController.forgetResetPassword);

    router.post('/user/forgetCheckAnswer', controller.userController.forgetCheckAnswer);
    
    router.put('/user/userInfo',controller.userController.updateUserInfo);
    
    router.get('/user/userInfo',controller.userController.getUserInfo);
    
    app.router.get('/user/checkValid/:type/:value',controller.userController.checkValid);
};