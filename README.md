# model:
 1. User
 2. Comment
 3. Book
 4. Chapter
 5. Category
 6. community

## 1. User:Comment
    1:n author
    n:m liked
    n:m unlike
## 2. User:Book
    n:m collection
    n:m recentRead
## 3. User:Community
    1:n author
    n:m liked
    n:m unlike
## 4. Comment:Book
    1:n comment
## 5. Book:Chapter
    1:n include
## 6. Book:Category
    1:n include
