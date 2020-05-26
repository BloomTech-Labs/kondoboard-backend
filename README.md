# Kondoboard Users DB
### https://kondo-board-api.herokuapp.com/api
##### All endpoints start with /api

*** ***

#### Endpoints
###### * = not currently working

##### Users
- [Get All User Info](#Get-All-User-Info) - needs saved jobs arrays
- [Get Single User Info](#Get-Single-User-Info) - needs saved jobs arrays
- [Register](#Register) *
- [Login](#Login) *
- [Update User](#Update-User)
- [Delete User](#Delete-User)

##### Users Info
- [Add Skill](#Add-Skill) *
- [Delete Skill](#Delete-Skill) *
- [Add City](#Add-City) *
- [Delete City](#Delete-City) *
- [Toggle Remote On/Off](#Toggle-Remote-On/Off) *

##### Jobs (Needs same structure as Datascience DB)
- [Get Job](#Get-Job) *
- [Add Job](#Add-Job) *
- [Archive Job](#Archive-Job) *

##### Users Saved Jobs
- [Get Favorite User Jobs](#Get-Favorite-User-Jobs) *
- [Save Favorite User Job](#Save-Favorite-User-Job) *
- [Get Irrelevant User Jobs](#Get-Irrelevant-User-Jobs) *
- [Save Irrelevant User Job](#Save-Irrelevant-User-Job) *
- [Archive User Job](#Archive-User-Job) *

##### User Tags (Not on first release)
- [View User Tag](#View-User-Tag) *
- [Add User Tag](#Add-User-Tag) *
- [Update User Tag](#Update-User-Tag) *
- [Delete User Tag](#Delete-User-Tag) *

*** ***

### <ins>Get All User Info</ins>
### <em>GET Request</em> 
#### URL: /users

##### Will return every user

##### 200 (Success) 
```javascript
...
  {
    "id": 2,
    "first_name": "Spider",
    "last_name": "Man",
    "email": "peterparker@newyork.com",
    ...
    "skills": "HTML, CSS, JavaScript, React, Node, Express",
    "cities": "New York, London, Los Angeles",
    "remote": true
    "favoritedJobs": [];
    "irrelevantJobs": [];
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
#### URL: /users/:user_id

##### 200 (Success) 
```javascript
  {
    "id": 2,
    "first_name": "Spider",
    "last_name": "Man",
    "email": "peterparker@newyork.com",
    ...
    "skills": "HTML, CSS, JavaScript, React, Node, Express",
    "cities": "New York, London, Los Angeles",
    "remote": true
    "favoritedJobs": [];
    "irrelevantJobs": [];
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
#### URL: /auth/register

##### Example Request
```javascript
{
  "data": "new user"
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
#### URL: /auth/login

##### Example Request
```javascript
{
    "loginData": "",
}
```
##### 201 (Success) 
###### Provides Authentication key to client localStorage
```javascript
{
  "login": "Logged in successfully." 
}
````

##### 404 (Bad Request)
> Will receive a 404 response if invalid login info
```javascript
{
  "login": "Failed to login"
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
#### URL: /users/:user_id

###### You can update a single or multiple fields at a time
###### Updating [cities](#Add-City) and [skills](#Add-Skill) have their own endpoints 
###### An easy way to toggle users.remote is [here](#Toggle-Remote-On/Off)

##### Example Request
```javascript
{
  "first_name": "Frodo",
  "last_name": "Baggins",
  "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg"
}
```

##### 201 (Success)
```javascript
{
  ...
  "first_name": "Frodo",
  "last_name": "Baggins",
  ...
  "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg"
  ...
}
````

##### 404 (Bad Request)
> Will recieve 404 response if you try to update "id", "email", "skills" or "cities"
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

### <ins>Delete User</ins>
#### <em>DELETE Request</em>
#### URL: /users/:user_id

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

### <ins>Add Skill</ins>
#### <em>PUT Request</em>
#### URL: /users/:user_id/addSkill

##### POST
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

### <ins>Delete Skill</ins>
#### <em>PUT Request</em>
#### URL: /users/:user_id/deleteSkill

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

### <ins>Add City</ins>
#### <em>PUT Request</em>
#### URL: /users/:user_id/addCity

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

### <ins>Delete City</ins>
#### <em>PUT Request</em>
#### URL: /users/:user_id/deleteCity

##### Example Request
```javascript
{
    "city": "Los Angeles"
}
```

##### 201 (Success)
```javascript
{
  "message": "Los Angeles has been removed from cities"
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

### <ins>Toggle Remote On/Off</ins>
#### <em>GET Request</em>
#### URL: /users/:user_id/remote

##### 201 (Success)
```javascript
{
  "message": "Remote has been turned [on/off]"
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

### <ins>Get Job</ins>
#### <em>GET Request</em>
#### URL: /jobs/:datascience_id

##### Checks if job has been saved into Users database from Datascience database

##### 201 (Success)

###### If job exists:
```javascript
{
  "message": "Job already exists"
}
```
###### If job doesn't exist:
```javascript
{
  "message": "Job does not exist"
}
````


##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

### <ins>Add Job</ins>
#### <em>POST Request</em>
#### URL: /jobs

##### Example Request
```javascript
{
    "new job"
}
```

##### 201 (Success)
```javascript
{
  "message": "New job added"
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

### <ins>Get Favorite User Jobs</ins>
#### <em>GET Request</em>
#### URL: /users/:id/favorite_jobs/

##### Pass in user_id in the URL, job_id in POST request
##### Instead of deleting a user job, use [Archive User Job](#Archive-User-Job)

##### Example Request
```javascript
{
  "job_id": 1,
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

### <ins>Save Favorite User Job</ins>
#### <em>POST Request</em>
#### URL: /users/:id/favorite_jobs/

##### Pass in user_id in the URL, job_id in POST request
##### Instead of deleting a user's saved job, use [Archive User Job](#Archive-User-Job)

##### Example Request
```javascript
{
  "job_id": 1,
}
```

##### 201 (Success)
```javascript
{
  "message": "Saved job as liked"
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

### <ins>Get Irrelevant User Jobs</ins>
#### <em>GET Request</em>
#### URL: /users/:id/irrelevant_jobs/

##### Pass in user_id in the URL, job_id in POST request
##### Instead of deleting a user's saved job, use [Archive User Job](#Archive-User-Job)

##### Example Request
```javascript
{
  "job_id": 1,
}
```

##### 201 (Success)
```javascript
{
  "message": "Saved job as irrelevant"
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

### <ins>Archive User Job</ins>
#### <em>POST Request</em>
#### URL: /users/:id/archive_job/

##### Pass in user_id in the URL, job_id in POST request

##### Example Request
```javascript
{
  "job_id": 1,
}
```

##### 201 (Success)
```javascript
{
  "message": "Archived Job"
}
```

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Invalid Request"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Sever Error"
}
```

*** ***

### <ins>View User Tag</ins>
#### <em>GET Request</em>
#### URL: /tags

*** ***

### <ins>Create User Tag</ins>
#### <em>POST Request</em>
#### URL: /tags

*** ***

### <ins>Update User Tag</ins>
#### <em>PUT Request</em>
#### URL: /tags/:id

*** ***

### <ins>Delete User Tag</ins>
#### <em>DELETE Request</em>
#### URL: /tags/:id

*** ***

