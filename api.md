# 1.  book

  ## 1.1 get /book/:bid/comment

   * #### description:

   * #### request:

   * #### response:

  ## 1.2  post /book/:bid/comment

   * #### description:

   * #### request:

   * #### response:

  ## 1.3  delete /book/:bid/comment/:cid

   * #### description:

   * #### request:

   * #### response:

  ## 1.4  put /book/comment/:cid

   * #### description:

   * #### request:

   * #### response:

  ## 1.5  get /book/comment/:cid

   * #### description:

   * #### request:

   * #### response:

  ## 1.6  get /book/comment/:cid/like

   * #### description:

   * #### request:

   * #### response:

  ## 1.7 get /book/comment/:cid/unlike

   * #### description:

   * #### request:

   * #### response:

  ## 1.8 get /book

   * #### description:

        getBookList

   * #### request:
        
        * query

            1.  **limit** : specifies the maximum number of rows to return
            2.  **offset** :  specifies the offset of the first row to return

   * #### response:
    
        ```json
        {
            "count": 28,
            "rows": [
                {
                    "id": 1,
                    "cover": "http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg",
                    "name": "1",
                    "company": "清华大学出版社",
                    "author": "张鹏宇",
                    "blurb": "这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了",
                    "pdate": "4/3/18",
                    "position": "tp123/java",
                    "views": 0,
                    "created_at": "2018-07-10T13:52:36.000Z",
                    "updated_at": "2018-07-10T13:56:08.000Z",
                    "cid": 1,
                    "Category": {
                        "id": 1,
                        "category": "网络文学",
                        "type": "男频",
                        "created_at": "2018-07-03T03:39:46.000Z",
                        "updated_at": "2018-07-03T03:39:46.000Z"
                    }
                },
                {
                    "id": 2,
                    "cover": "http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg",
                    "name": "1",
                    "company": "清华大学出版社",
                    "author": "张鹏宇",
                    "blurb": "这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了",
                    "pdate": "4/3/18",
                    "position": "tp123/java",
                    "views": 0,
                    "created_at": "2018-07-10T13:52:36.000Z",
                    "updated_at": "2018-07-10T13:56:41.000Z",
                    "cid": 1,
                    "Category": {
                        "id": 1,
                        "category": "网络文学",
                        "type": "男频",
                        "created_at": "2018-07-03T03:39:46.000Z",
                        "updated_at": "2018-07-03T03:39:46.000Z"
                    }
                },
                {
                    "id": 3,
                    "cover": "http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg",
                    "name": "1",
                    "company": "清华大学出版社",
                    "author": "张鹏宇",
                    "blurb": "这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了",
                    "pdate": "4/3/18",
                    "position": "tp123/java",
                    "views": 0,
                    "created_at": "2018-07-10T13:52:36.000Z",
                    "updated_at": "2018-07-10T13:56:57.000Z",
                    "cid": 2,
                    "Category": {
                        "id": 2,
                        "category": "网络文学",
                        "type": "女频",
                        "created_at": "2018-07-03T03:39:51.000Z",
                        "updated_at": "2018-07-03T03:39:51.000Z"
                    }
                },
                {
                    "id": 4,
                    "cover": "http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg",
                    "name": "1",
                    "company": "清华大学出版社",
                    "author": "张鹏宇",
                    "blurb": "这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了",
                    "pdate": "4/3/18",
                    "position": "tp123/java",
                    "views": 0,
                    "created_at": "2018-07-10T13:52:36.000Z",
                    "updated_at": "2018-07-10T13:57:06.000Z",
                    "cid": 2,
                    "Category": {
                        "id": 2,
                        "category": "网络文学",
                        "type": "女频",
                        "created_at": "2018-07-03T03:39:51.000Z",
                        "updated_at": "2018-07-03T03:39:51.000Z"
                    }
                }
            ]
        }
        ```

  ## 1.9 get /book/ranking

   * #### description:

   * #### request:

   * #### response:

  ## 1.10 get /book/search

   * #### description:

   * #### request:

   * #### response:
    
  ## 1.11 get /book/recommend

   * #### description:

   * #### request:

   * #### response:
    
  ## 1.12 get /book/:bid

   * #### description:

   * #### request:

   * #### response:

  ## 1.13 post /book/:bid

   * #### description:

   * #### request:

   * #### response:
    
  ## 1.14 post /book

   * #### description:

   * #### request:

   * #### response:

  ## 1.15 put /book/:bid

   * #### description:

   * #### request:

   * #### response:

  ## 1.16 put /book/:bid/type

   * #### description:

   * #### request:

   * #### response:

  ## 1.17 delete /book/:bid

   * #### description:

   * #### request:

   * #### response:

  ## 1.18 post /book/:bid

   * #### description:

   * #### request:

   * #### response:

  ## 1.19 get /book/:bid/:chapterID

   * #### description:

   * #### request:

   * #### response:

  ## 1.20 delete /book/:bid/:chapterID

   * #### description:

   * #### request:

   * #### response:

  ## 1.21 put /book/:bid/:chapterID

   * #### description:

   * #### request:

   * #### response:

# 2. category

   * #### description:

   * #### request:

   * #### response:

    get /category

   * #### description:

   * #### request:

   * #### response:

    get /category/all

   * #### description:

   * #### request:

   * #### response:

    post /category

   * #### description:

   * #### request:

   * #### response:

    delete /category/:cid

   * #### description:

   * #### request:

   * #### response:

    get /category/type

   * #### description:

   * #### request:

   * #### response:

# 3. community

    post /community

   * #### description:

   * #### request:

   * #### response:

    get /community

   * #### description:

   * #### request:

   * #### response:

# 4. user

   * #### description:

   * #### request:

   * #### response:

    post /user/login

   * #### description:

   * #### request:

   * #### response:

    get /user/

   * #### description:

   * #### request:

   * #### response:
    
    post /user/register

   * #### description:

   * #### request:

   * #### response:

    put /user/resetPassword

   * #### description:

   * #### request:

   * #### response:

    put /user/info/:uid

   * #### description:

   * #### request:

   * #### response:
    
    get /user/info/:uid

   * #### description:

   * #### request:

   * #### response:

    get /user/ranking    

   * #### description:

   * #### request:

   * #### response:

    post /user/collect/

   * #### description:

   * #### request:

   * #### response:

    delete /user/collect/:bid

   * #### description:

   * #### request:

   * #### response:

    get /user/collect

   * #### description:

   * #### request:

   * #### response:

# 5. admin

    post /admin/login

   * #### description:

   * #### request:

   * #### response:

    get /admin/user/:rid

   * #### description:

   * #### request:

   * #### response:

    put /admin/:uid

   * #### description:

   * #### request:

   * #### response:

    get /admin/search

   * #### description:

   * #### request:

   * #### response:
    
    post /admin/register

   * #### description:

   * #### request:

   * #### response: