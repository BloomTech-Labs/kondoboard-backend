# Kondoboard Users DB
### https://kondo-board-api.herokuapp.com/api
##### Note: All endpoints start with /api

*** ***
- [Get All User Info](#Get-All-User-Info)
- [Get Single User Info](#Get-Single-User-Info)

- [Register User](#Register-User)
- [Login User](#Login-User)
- [Update User](#Update-User)
- [Delete User](#Delete-User)

- [Toggle Remote on/off](#Toggle-Remote-on/off)
- [Add skill](#Add-skill)
- [Delete skills](#Delete-skill)
- [Add city](#Add-city)
- [Delete cities](#Delete-City)

- Add Job (not added)
- Archive Job? (add option to archive if jobs older than 2 months)

- Add liked job
- Add irrelevant job
- Toggle archived saved job

- View User Tag (not needed in version 1)
- Add User Tag (not needed in version 1)
- Update User Tag (not needed in version 1)
- Delete User Tag (not needed in version 1)

*** ***
*** ***

# <ins>Get All User Info</ins>
### <em>GET Request</em> 
#### URL: /users

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

### <ins>Get Single User Info</ins>
### <em>GET Request</em>
#### Specific User 
#### URL: /users/:id

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

### <ins>Register User</ins>
#### <em>POST Request</em>
#### URL: 

##### Example Request
```javascript
{
   ""
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

### <ins>Login User</ins> 
#### <em>POST Request</em>
#### URL:

##### Example Request
```javascript
{
    ""
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

### <ins>Update User</ins>
#### <em>PUT Request</em>
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

### <ins>Delete user</ins>
#### <em>DELETE Request</em>
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

### <ins>Toggle Remote on/off</ins>
#### <em>GET Request</em>
#### URL: /users/:id/remote

##### 201 (Success)
```javascript
{
  "message": "Remote has been turned [on/off]}"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error completing request"
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

### <ins>Add skill</ins>
#### <em>PUT Request</em>
#### URL: /users/:id/addSkill

##### Example Request
```javascript
{
    "skill": "postgres"
}
```

##### 201 (Success)
```javascript
{
  "message": "postgres has been added to skills"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error adding skill"
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

### <ins>Delete skill</ins>
#### <em>PUT Request</em>
#### URL: /users/:id/deleteSkill

##### Example Request
```javascript
{
    "skill": "React"
}
```

##### 201 (Success)
```javascript
{
  "message": "React has been deleted from skills"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error deleting skill"
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

### <ins>Add city</ins>
#### <em>PUT Request</em>
#### URL: /users/:id/addCity

##### Example Request
```javascript
{
    "city": "Boston"
}
```

##### 201 (Success)
```javascript
{
  "message": "Boston has been added to cities"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error adding city"
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

### <ins>Delete city</ins>
#### <em>PUT Request</em>
#### URL: /users/:id/deleteCity

##### Example Request
```javascript
{
    "city": "Los Angeles"
}
```

##### 201 (Success)
```javascript
{
  "message": "Los Angeles has been deleted from cities"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error deleting city"
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

### <ins>Add Job</ins>
#### <em>POST Request</em>
#### URL: /jobs

##### Example Request
```javascript
{
    ""
}
```

##### 201 (Success)
```javascript
{
  "message": ""
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": ""
}
```

*** ***

### <ins>Archive Job</ins>
#### <em>GET Request</em>
#### URL: /jobs/:id/archive

##### 201 (Success)
```javascript
{
  "message": ""
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": ""
}
```

*** ***

## User Saved Jobs

### <ins>Add Liked Job</ins>
#### <em>POST Request</em>
#### URL: /users/:id/jobs/

##### Example Request
```javascript
{
  "job_id": 1,
  "status": "like"
}
```

##### 201 (Success)
```javascript
{
  "message": "Added job to liked"
}
```

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": ""
}
```

*** ***

### <ins>Add irrelevant Job</ins>
#### <em>POST Request</em>
#### URL: /users/:id/jobs/

##### Example Request
```javascript
{
  "job_id": 2,
  "status": "dislike"
}
```

##### 201 (Success)
```javascript
{
  "message": "Added to irrelevant jobs"
}
```

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": ""
}
```

*** ***

### <ins>Toggle archived saved job</ins>
#### <em>POST Request</em>
#### URL: /users/:id/jobs/

##### Example Request
```javascript
{
  "job_id": 2,
  "status": "dislike"
}
```

##### 201 (Success)
```javascript
{
  "message": "Added to irrelevant jobs"
}
```

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": ""
}
```

*** ***

### <ins>View user_ta</ins> (Not used for release 1)
#### <em>GET Request</em>
#### URL: /tags

*** ***

### <ins>Create user_tag</ins> (Not used for release 1)
#### <em>POST Request</em>
#### URL: /tags

*** ***

### <ins>Update user_tag</ins> (Not used for release 1)
#### <em>PUT Request</em>
#### URL: /tags/:id

*** ***

### <ins>Delete user_tag</ins> (Not used for release 1)
#### <em>DELETE Request</em>
#### URL: /tags/:id

*** ***

