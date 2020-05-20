# Kondoboard-backend 
### https://kondo-board-api.herokuapp.com/api

*** ***

### Get User Info
### GET Request
#### All or Specific User 
#### /users or /users/:id (setting up oAuth)

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
    "Favorited jobs": [],
    "Irrelevant jobs": []
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

### Register User
#### POST Request
#### URL: - Setting up oAuth

##### Example Request
```javascript
{
    ~~~ data ~~~
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
    email: "spiderman@newyork.com",
    password: "password"
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
> Will receive a 404 response if no users that match
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
  ~~~ User data ~~~
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id or if there is no field to update.
```javascript
{
  "message": "Unable to update"
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

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Create user_tag (Not used for release 1)
#### POST Request
#### URL: /tags

##### 201 (Success)
```javascript
{
   "message": "User deleted successfully"
}
````

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
```

*** ***

### Update user_tag (Not used for release 1)
#### PUT Request
#### URL: /tags/:id

*** ***

### Delete user_tag (Not used for release 1)
#### DELETE Request
#### URL: /tags/:id

*** ***

