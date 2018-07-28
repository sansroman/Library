# 1.  book

  ## 1.1 获取某本书的评论

  - 接口地址 /book/:bid/comment

  - 请求方法:get

  - 请求参数: 
	* query
      参数名称 | 必需 | 类型   | 描述
      ---------|------|--------|--------------
      limit    | 是   | string | 一页几条数据
      offset   | 是   | string | 当前页数

	* params
      参数名称 | 必需 | 类型   | 描述
      ------------|------|--------|--------------
      bid    | 是   | string | 书id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      ------------|------|---------|----------------
      status      | 是   | boolean | 判断相应状态


  ## 1.2 在某本书下提交评论

  - 接口地址 /book/:bid/comment

  - 请求方法:post

  - 请求参数: 
	* body
      参数名称 | 必需 | 类型   | 描述
      --------|------|--------|--------------
      content | 是   | string | 评论内容

	* params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      bid    | 是   | string | 书id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态


  ## 1.3  删除某本书下某条评论

  - 接口地址 /book/:bid/comment/:cid

  - 请求方法: delete

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 评论id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.4  修改某条评论

  - 接口地址 /book/comment/:cid

  - 请求方法:put

  - 请求参数: 
    * body

      参数名称 | 必需 | 类型   | 描述
      --------|------|--------|--------------
      content | 是   | string | 评论内容

    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 评论id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.5 获取某一条评论

  - 接口地址 /book/comment/:cid

  - 请求方法:get

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 评论id

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.6  获取评论的点赞数

  - 接口地址 /book/comment/:cid/like

  - 请求方法:get

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 评论id

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.7 获取评论的不喜欢数

  - 接口地址 /book/comment/:cid/unlike

  - 请求方法:get

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 评论id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.8 获取所有书

  - 接口地址 /book

  - 请求方法:get

  - 请求参数: 
    * query
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      limit    | 是   | string | 一页几条数据
      offset    | 是   | string | 当前页数
      cid    | 是   | string | 分类id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.9 书籍排行

  - 接口地址 /book/ranking

  - 请求方法:get

  - 请求参数: 
   
  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.10 查询书籍

  - 接口地址 /book/search

  - 请求方法:get

  - 请求参数: 
    * query
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      limit    | 是   | string | 一页几条数据
      offset    | 是   | string | 当前页数
      bookname    | 是   | string | 书名

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.11 get /book/recommend

  - 接口地址 /book/recommend

  - 请求方法:get

  - 请求参数: 
    * query
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      num    | 是   | string | 推荐书的数量

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.12 get /book/:bid

  - 接口地址 /book/recommend

  - 请求方法:get

  - 请求参数: 
    * query
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      num    | 是   | string | 推荐书的数量

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.13 通过id查找图书

  - 接口地址 /book/:bid

  - 请求方法:post

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      bid    | 是   | string | 图书id

  - 响应参数

      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态
    
  ## 1.14 添加图书

  - 接口地址 /book

  - 请求方法:post

  - 请求参数: 
    * body
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      booklist    | 是   | string | 图书列表

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.15 根据id更新书的信息

  - 接口地址 /book/:bid

  - 请求方法:put

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      bid    | 是   | string | 图书id

    * body
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cover  | 是   | string | 图书图片
      name  | 是   | string | 图书名字
      author  | 是   | string | 图书作者
      company  | 是   | string | 图书出版社
      blurb  | 是   | string | 图书简介
      pdate  | 是   | string | 图书出版日期

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.16 更新图书分类
    
  - 接口地址 /book/:bid/type

  - 请求方法:put

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      bid    | 是   | string | 图书id

    * body
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      cid    | 是   | string | 分类id

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.17 删除图书
    
  - 接口地址 /book/:bid

  - 请求方法:delete

  - 请求参数: 
    * params
      参数名称 | 必需 | 类型   | 描述
      -------|------|--------|--------------
      bid    | 是   | string | 图书id

  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.18 post /book/:bid

  - 接口地址 /book/:bid

  - 请求方法:post

  - 请求参数: 
   
  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.19 get /book/:bid/:chapterID

  - 接口地址 /book/:bid/:chapterID

  - 请求方法:get

  - 请求参数: 
   
  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.20 delete /book/:bid/:chapterID

  - 接口地址 /book/:bid/:chapterID

  - 请求方法:delete

  - 请求参数: 
   
  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

  ## 1.21 put /book/:bid/:chapterID

  - 接口地址 /book/:bid/:chapterID

  - 请求方法:put

  - 请求参数: 
   
  - 响应参数
      参数名称 | 必需 | 类型   | 描述
      --------|------|---------|----------------
      status  | 是   | boolean | 判断相应状态

# 2. category

   * description:

   * request:

   * response:

    get /category

   * description:

   * request:

   * response:

    get /category/all

   * description:

   * request:

   * response:

    post /category

   * description:

   * request:

   * response:

    delete /category/:cid

   * description:

   * request:

   * response:

    get /category/type

   * description:

   * request:

   * response:

# 3. community

    post /community

   * description:

   * request:

   * response:

    get /community

   * description:

   * request:

   * response:

# 4. user

   * description:

   * request:

   * response:

    post /user/login

   * description:

   * request:

   * response:

    get /user/

   * description:

   * request:

   * response:
    
    post /user/register

   * description:

   * request:

   * response:

    put /user/resetPassword

   * description:

   * request:

   * response:

    put /user/info/:uid

   * description:

   * request:

   * response:
    
    get /user/info/:uid

   * description:

   * request:

   * response:

    get /user/ranking    

   * description:

   * request:

   * response:

    post /user/collect/

   * description:

   * request:

   * response:

    delete /user/collect/:bid

   * description:

   * request:

   * response:

    get /user/collect

   * description:

   * request:

   * response:

# 5. admin

    post /admin/login

   * description:

   * request:

   * response:

    get /admin/user/:rid

   * description:

   * request:

   * response:

    put /admin/:uid

   * description:

   * request:

   * response:

    get /admin/search

   * description:

   * request:

   * response:
    
    post /admin/register

   * description:

   * request:

   * response: