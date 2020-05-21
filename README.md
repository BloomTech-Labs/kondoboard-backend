# Kondoboard-backend 
### https://kondo-board-api.herokuapp.com/api
##### Note: All endpoints start with /api

*** ***

# ~ Things to add ~

### users table 
##### "Get User Info" route to include an array of "favorite jobs" and "irrelevant jobs" - for datascience
##### Toggle if user would like to see remote jobs
##### cities  - view, add, update, delete
##### skills  - view, add, update, delete
##### track   - view

### jobs table
##### View, add

### user_saved_jobs && irrlevant_jobs
##### View, add, update, delete
###### Can a user delete a saved job? Could add an "archived" boolean column to user_saved_jobs


*** ***

### Get All User Info [ Data science ]
### GET Request 
#### /users

##### 200 (Success) 
```javascript
...
  {
    "id": 2,
    "first_name": "Spider",
    "last_name": "Man",
    "email": "peterparker@newyork.com",
    "password": "[hashedPassword]",
    "profile_image": "",
    "user_track": "Web",
    "skills": "HTML, CSS, JavaScript, React, Node, Express",
    "cities": "New York, London, Los Angeles",
    "remote": true
  },
...
``` 

##### 404 (Bad Request)
> Will receive a 404 response if no user(s) found.
```javascript
{
  "message": "No users found"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Get Single User Info
### GET Request
#### Specific User 
#### /users/:id

##### 200 (Success) 
```javascript
  {
    "id": 2,
    "first_name": "Spider",
    "last_name": "Man",
    "email": "peterparker@newyork.com",
    "password": "[hashedPassword]",
    "profile_image": "",
    "user_track": "Web",
    "skills": "HTML, CSS, JavaScript, React, Node, Express",
    "cities": "New York, London, Los Angeles",
    "remote": true
  },
``` 

##### 404 (Bad Request)
> Will receive a 404 response if no user(s) found.
```javascript
{
  "message": "No users found"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Register User
#### POST Request
#### URL: (Setting up oAuth)

##### Example Request
```javascript
{
   "Waiting on oAuth setup"
}
```

##### 201 (Success)
```javascript
{
  "message": "User created succesfully!"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if there are missing/invalid fields.
```javascript
{
  "message": "Unable to create user"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Login User 
#### POST Request
#### URL: (Setting up oAuth)

##### Example Request
```javascript
{
    "Waiting on oAuth Setup"
}
```
##### 201 (Success)
```javascript
{
  id: 1,
  first_name: "Spider",
  last_name: "man",
  ...
}
````

##### 404 (Bad Request)
> Will receive a 404 response if invalid login info
```javascript
{
  "message": "Unable to login"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Update User 
#### PUT Request
#### URL: /users/:id

##### Example Request
```javascript
{
    "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg"
}
```

##### 201 (Success)
```javascript
{
  id: 1,
  first_name: "Spider",
  last_name: "man",
  ...
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Invalid request"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Delete user
#### DELETE Request
#### URL: /users/:id

##### 201 (Success)
```javascript
{
   "message": "User deleted successfully"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if there is a problem with the server
```javascript
{
  "message": "User not found"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### View user_tag (Not used for release 1)
#### GET Request
#### URL: /tags

*** ***

### Create user_tag (Not used for release 1)
#### POST Request
#### URL: /tags

*** ***

### Update user_tag (Not used for release 1)
#### PUT Request
#### URL: /tags/:id

*** ***

### Delete user_tag (Not used for release 1)
#### DELETE Request
#### URL: /tags/:id

*** ***

