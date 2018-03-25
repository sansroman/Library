module.exports = app => {
    const { router, controller } = app;

    router.post('/user/login',controller.userController.login);

    router.get('/user/logout',controller.userController.logout);
    
    router.post('/user/register',controller.userController.register);
    
    router.get('/user/question/',controller.userController.getQuestion);
    
    router.put('/user/resetPassword',controller.userController.resetPassword);
    
    router.post('/user/forgetCheckPassword',controller.userController.forgetResetPassword);

    router.post('/user/forgetCheckAnswer', controller.userController.forgetCheckAnswer);
    
    router.put('/user/userInfo',controller.userController.updateUserInfo);
    
    router.get('/user/userInfo',controller.userController.getUserInfo);
    
    router.get('/user/checkValid/:type/:value',controller.userController.checkValid);

    router.put('/user/bookShelf',controller.userController.getBookshelf);

    router.put('/user/bookShelf/:bookid',controller.userController.addBookshelf);
    
    router.del('/user/bookShelf/:bookid',controller.userController.delBookshelf)

    rouetr.get('/user/all',controller.userController.getAllUserList);

    rouetr.get('/user/all',controller.userController.getUserList);    

    router.put('/user/:userid',controller.userController.ManagerUser);
  
    

    router.get('/book/recommend',controller.bookController.recommend);

    router.get('/book/:bookid',controller.bookController.getBook);

    router.get('/book/',controller.bookController.getBookList);

    router.put('/book/:bookid',controller.bookController.updateBook);    

    router.get('/book/:bookid/detail',controller.bookController.getBookDetail);
    
    



};