# 1.  book
    get /book/:bid/comment'

    post /book/:bid/comment'

    delete /book/:bid/comment/:cid'

    put /book/comment/:cid'

    get /book/comment/:cid'

    get /book/comment/:cid/like'

    get /book/comment/:cid/unlike'



    get /book'

    get /book/ranking'
    
    get /book/search'
    
    get /book/recommend'
    
    get /book/:bid'
    
    post /book/:bid'
    
    post /book'

    put /book/:bid'

    put /book/:bid/type'
    
    delete /book/:bid'
    
    post /book/:bid'

    get /book/:bid/:chapterID'

    delete /book/:bid/:chapterID'

    put /book/:bid/:chapterID'
    
# 2. category
    get /category'

    get /category/all'

    post /category'

    delete /category/:cid'

    get /category/type'

# 3. community
    post /community'

    get /community'

    
# 4. user
    post /user/login'

    get /user/logout'
    
    post /user/register'


    
    put /user/resetPassword'
    
    put /user/info/:uid'
    
    get /user/info/:uid'

    get /user/ranking'    

    post /user/collect/'

    delete /user/collect/:bid'

    get /user/collect'


# 5. admin
    post /admin/login'

    get /admin/user/:rid',isAdmin

    put /admin/:uid',isAdmin

    get /admin/search',isAdmin
    
    post /admin/register',isAdmin
