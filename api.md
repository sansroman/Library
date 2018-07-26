# 1. Overview
1. [user](#user)
2. [book](#book)
3. [category](#category)
4. [admin](#admin)
5. [comment](#comment)
6. [shelf](#shelf)
# 2. <span id="user">User</span>

### 1. login

> POST /user/login

Parameters:
* username
* password
* rememberMe


Response:
### 2. logout

> GET /user/logout

Parameters:none


Response:

### 3. register
> POST /user/register

Parameters:
* account
* password
* nickname
* avatar
* signature


Response:
### 4. reset password
> PUT /user/resetPassword

Parameters:
* answer
* newPassword

Response:
### 5. get user info
> GET /user/info/:uid

Parameters:none


Response:
### 6. modify user info
> PUT /user/info/:uid

Parameters:
* nickname
* avatar
* signature


Response:
### 7. get user rank
> GET /user/rank

Parameters:none

Response:

# 3. <span id="book">Book</span>

### 1. list books
> GET /book/

Parameters:none


Response:
### 2. book topics
> GET /book/ranking

Parameters:none


Response:
### 3. search book by ID
> GET /book/search

Parameters:none


Response:
### 4. update book
> PUT /book/:bookid

Parameters:
* cover
* type
* name
* publishingCompany
* publishingPerson
* position
* views


Response:
### 5. create chapter
> POST /book/:bookid

Parameters:
* title
* index
* content


Response:
### 6. get book info
> GET /book/:bookid

Parameters:none


Response:
### 7. delete book 
> delete /book/:bookid

Parameters:none


Response:
### 8. add book
> POST /book/

Parameters:
* cover
* type
* name
* publishingCompany
* publishingPerson
* position
* views

Response:
### 9. modify chapter
> PUT /book/:bookid/:chapterID

Parameters:
* title
* index
* content


Response:
### 10. delete chapter
> DELTET /book/:bookid/:chapterID

Parameters:none


Response:
### 11. get chapter
> GET /book/:bookid/:chapterID

Parameters:none


Response:

# 4. <span id="category">Category</span>

### 1. list category
> GET /category

Parameters:none



Response:
### 2. create category
> POST /category

Parameters:
* category
* type


Response:
### 3. modifyCategory
> PUT /category/:cid

Parameters:
* category
* type



Response:
### 4. get sub category
> GET /category/:cid/type

Parameters:none


Response:
### 5. delete category
> DELETE /category/:cid

Parameters:none


Response:
# 5. <span id="admin">Admin</span>

### 1. login
> POST /admin/login

Parameters:
* username
* password
* rememberMe


Response:
### 2. list user
> GET /admin/user/:rid

Parameters:none


Response:
### 3. modify user role
> PUT /admin/:uid

Parameters:
* userid
* rid


Response:
### 4. search user by username
> GET /admin/search

Parameters:
* username

Response:
# 6. <span id="comment">Comment</span>
# 7. <span id="shelf">Shelf</span>