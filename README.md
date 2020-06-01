# Kondoboard Users DB
## https://kondo-board-api.herokuapp.com/api
##### All endpoints start with /api

*** ***

#### Endpoints

##### Users
- [Get All User Data](#Get-All-User-Data)
- [Get Single User Info](#Get-Single-User-Info)
- [Get User by Email](#Get-User-by-Email) 
- [Add New User](#Add-New-User)
- [Update User](#Update-User)
- [Delete User](#Delete-User)

##### Jobs
- [Get Job](#Get-Job) 
- [Add Job](#Add-Job)

##### Users Saved Jobs
- [Get Favorite User Jobs](#Get-Favorite-User-Jobs)
- [Get Irrelevant User Jobs](#Get-Irrelevant-User-Jobs)
- [Save Favorite User Job](#Save-Favorite-User-Job)
- [Save Irrelevant User Job](#Save-Irrelevant-User-Job)

*** ***

### <ins>Get All User Data</ins>
### <em>GET Request</em> 
#### URL: /ds 

##### Will return every user and their jobs (Data Science endpoint)
##### https://kondo-board-api.herokuapp.com/api/ds

##### 200 (Success) 
```javascript
[
  {
    "user": {
      "id": 1,
      "first_name": "Spider",
      "last_name": "Man",
      "email": "peterparker@newyork.com",
      "profile_image": "",
      "user_track": "Web",
      "skills": [
        "CSS",
        "React",
        "HTML"
      ],
      "locations": [
        "Denver",
        "New York",
        "San Francisco"
      ],
      "remote": 1
    },
    "savedJobs": [
      {
        "id": 1,
        "ds_id": "A1549335342",
        "source_url": "[application url]",
        "title": "Data Engineer",
        "company": "capital_one",
        "description": "... innovate leveraging ...",
        "date_published": "2020-05-19",
        "location_city": "Illinois Medical District",
        "location_state": "Illinois",
        "geo_locat": "41.868494,-87.673975"
      },
      {
        "id": 3,
        "ds_id": "A1533100037",
        "source_url": "[application url]",
        "title": "Data Engineer",
        "company": "mouri_tech",
        "description": "Role Data Engineer Location Wilmington, DE Skillset Language PythonScalaJava ...",
        "date_published": "2020-04-30",
        "location_city": "Wilmington",
        "location_state": "Delaware",
        "geo_locat": "39.73126,-75.545138"
      }
    ],
    "irrelevantJobs": [
      {
        "id": 2,
        "ds_id": "A1556216004",
        "source_url": "[application url]",
        "title": "Data Engineer or Big Data Engineer",
        "company": "katalyst_technologies_inc.",
        "description": "... Big Data Engineer ...",
        "date_published": "2020-05-27",
        "location_city": "San Francisco",
        "location_state": "California",
        "geo_locat": "37.798085,-122.466538"
      }
    ]
  },
  ...
]
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
#### URL: /users/:user_id

##### 200 (Success) 
##### https://kondo-board-api.herokuapp.com/api/users/4
```javascript
{
    "id": 4,
    "first_name": "Bat",
    "last_name": "Man",
    "email": "batman@gmail.com",
    "profile_image": "",
    "user_track": "Data Science",
    "skills": [
        "Neural Networks",
        "AI",
        "Robotics"
    ],
    "locations": [
        "Unknown"
    ],
    "remote": 1
}
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

### <ins>Get User by Email</ins> 
### <em>GET Request</em>
#### URL: /email

##### Example Request Body
##### https://kondo-board-api.herokuapp.com/api/users/email
```javascript
{
  "email": "peterparker@newyork.com"
}
```
##### 201 (Success) 
###### Provides Authentication key to client localStorage
```javascript
{
  {
      "id": 1,
      "first_name": "Spider",
      "last_name": "Man",
      "email": "peterparker@newyork.com",
      "profile_image": "",
      "user_track": "Web",
      "skills": [
          "CSS",
          "React",
          "HTML"
      ],
      "locations": [
          "Denver",
          "New York",
          "San Francisco"
      ],
      "remote": 1
  }
}
````

##### 404 (Bad Request)
> Will receive a 404 response if invalid request
```javascript
{
  "message": "No user found with that email"
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

### <ins>Add New User</ins>
### <em>POST Request</em>
#### URL: /users

##### Example Request
```javascript
{
  "first_name": "Spider",
  "last_name": "Pig",
  "email": "spiderpig@gmail.com",
  "profile_image": "",
  "user_track": "Web",
  "skills": "HTML,CSS,React,Angular",
  "locations": "New York,Seattle,Denver,Los Angeles",
  "remote": 0
}
```

##### 201 (Success)
```javascript
{
  "message": "User [first_name] created successfully!"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if there are missing/invalid fields.
```javascript
{
  "message": "Unable to create new user"
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
### <em>PUT Request</em>
#### URL: /users/:user_id

##### You can update single, or multiple fields at a time
##### Can't change user id or email


##### Example Request
```javascript
{
  "first_name": "Frodo",
  "last_name": "Baggins",
  "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg",
  "remote": true
}
```

##### 201 (Success - returns updated user object)
```javascript
{
    "id": 3,
    "first_name": "Frodo",
    "last_name": "Baggins",
    "email": "superguy@america.com",
    "profile_image": "[profilePicUrl]",
    "user_track": "Data Science",
    "skills": [
        "CSS",
        "React",
        "HTML"
    ],
    "locations": [
        "Washington DC",
        "San Francisco",
        "New York"
    ],
    "remote": 1
}
```

##### 404 (Bad Request)
> Will receive 404 response if you try to update "id" or "email"
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
### <em>DELETE Request</em>
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

### <ins>Get Job</ins>
### <em>GET Request</em>
#### URL: /jobs/:job_id

##### 201 (Success)

###### If job exists, returns job object
```javascript
{
  "id": 1,
  "ds_id": "A1521288337",
  "source_url": "[link-to-apply]",
  "title": "Data Engineer",
  "description": "Data Engineering team owns and develops the technology platform that offers decision makers both performance metrics and analysis as well as the self-service capability to perform ...",
  "date_published": "2020-04-14",
  "locations": "Newark"
}
```
###### If job doesn't exist, it returns an empty array
```javascript
{
  []
}
````


##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": ""
}
```

*** ***

### <ins>Add Job</ins>
### <em>POST Request</em>
#### URL: /jobs

##### Example Request
```javascript
{
  "datascience_id": "A1521288447",
  "source_url": "[link-to-apply]",
  "title": "New Engineer",
  "description": "Description We are seeking a highlye capability to perform ...",
  "date_published": "2020-04-20",
  "location_raw": "Newark" 
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
  "message": "Unable to add job"
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

### <ins>Get Favorite User Jobs</ins>
### <em>GET Request</em>
#### URL: /users/:id/favorite_jobs/

##### Pass in user_id in the URL, job_id in POST request

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
### <em>POST Request</em>
#### URL: /users/:id/favorite_jobs/

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
### <em>GET Request</em>
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
