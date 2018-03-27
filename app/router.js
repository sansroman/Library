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

    router.get('/user/times',controller.userController.getUserListBytime);

    router.get('/user/books',controller.userController.getUserListByBooks);

    rouetr.get('/user',controller.userController.getUserList);

    router.put('/user/:userid',controller.userController.ManagerUser);

    router.del('/user/:userid',controller.userController.deleteUser);    

    router.get('/user/search',controller.userController.searchUser)
  
    router.get('/user/category',controller.userController.getCategory);
    



    router.get('/book/recommend',controller.bookController.recommend);

    router.get('/book',controller.bookController.getBookList);

    router.post('/book',controller.bookController.addBook);    
    
    router.get('/book/search',controller.bookController.searchBook);
    
    router.get('/book/:bookid',controller.bookController.getBook);

    router.put('/book/:bookid',controller.bookController.updateBook);   
    
    router.del('/book/:bookid',controller.bookController.deleteBook);    
    
    router.get('/book/:bookid/detail',controller.bookController.getBookDetail);
    
    router.get('/book/category',controller.bookController.getCategory);

    router.post('/book/category',controller.bookController.addCategory);
    
    



};