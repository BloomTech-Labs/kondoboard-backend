# Kondoboard Backend Database
## https://kondo-board-api.herokuapp.com/api
##### All endpoints start with /api

*** ***

#### Endpoints

##### Data Science
- [DS All User Data](#DS-All-User-Data)
- [DS Single User Data](#DS-Single-User-Data)

##### Users
- [Get Single User Info](#Get-Single-User-Info)
- [Get User by Email](#Get-User-by-Email) 
- [Add New User](#Add-New-User)
- [Update User](#Update-User)
- [Delete User](#Delete-User)

##### Jobs
- [Save Favorite](#Save-Favorite)
- [Save Irrelevant](#Save-Irrelevant)
- [Get Favorite User Jobs](#Get-Favorite-User-Jobs)
- [Get Irrelevant User Jobs](#Get-Irrelevant-User-Jobs)

##### Tags
- [Get All User Tags](#Get-All-User-Tags)
- [Add Tag](#Add-Tag)
- [Update Tag](#Update-Tag)
- [Delete Tag](#Delete-Tag)

#### Job Tags
- [Add Tag to Job](#Add-Tag-to-Job)

#### Kanboard (Not added yet)
- [Get User Columns]
- [Add Column]
- [Update Column]
- [Delete Column]

*** ***

### <ins>DS All User Data</ins>
### <em>GET Request</em> 
#### URL: /ds 

##### Will return every user and their jobs
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
            "cities": [
                "Denver",
                "San Francisco"
            ],
            "states": [
                "Colorado",
                "New York"
            ],
            "remote": true
        },
        "savedJobs": [
            {
                "id": 1,
                "ds_id": "A1549335342",
                "source_url": "[application url]",
                "title": "Data Engineer",
                "company": "capital_one",
                "description": "... innovate leveraging ...",
                "date_published": "2020-05-19T06:00:00.000Z",
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
                "date_published": "2020-04-30T06:00:00.000Z",
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
                "date_published": "2020-05-27T06:00:00.000Z",
                "location_city": "San Francisco",
                "location_state": "California",
                "geo_locat": "37.798085,-122.466538"
            }
        ]
    },
    ...
]
    
``` 
##### 400 (Bad Request)
> Will receive a 400 response if no user(s) found.
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

### <ins>DS Single User Data</ins>
### <em>GET Request</em> 
#### URL: /ds/:user_id

##### Will return single user and their jobs
##### https://kondo-board-api.herokuapp.com/api/ds/3

##### 200 (Success) 
```javascript
{
    "user": {
        "id": 3,
        "first_name": "Captain",
        "last_name": "America",
        "email": "superguy@america.com",
        "profile_image": "",
        "user_track": "Data Science",
        "skills": [
            "CSS",
            "React",
            "HTML"
        ],
        "cities": [
            "Washington DC"
        ],
        "states": [
            "Maryland"
        ],
        "remote": false
    },
    "savedJobs": [
        {
            "id": 3,
            "ds_id": "A1533100037",
            "source_url": "[application url]",
            "title": "Data Engineer",
            "company": "mouri_tech",
            "description": "Role Data Engineer Location Wilmington, DE Skillset Language PythonScalaJava ...",
            "date_published": "2020-04-30T06:00:00.000Z",
            "location_city": "Wilmington",
            "location_state": "Delaware",
            "geo_locat": "39.73126,-75.545138"
        }
    ],
    "irrelevantJobs": [
        {
            "id": 1,
            "ds_id": "A1549335342",
            "source_url": "[application url]",
            "title": "Data Engineer",
            "company": "capital_one",
            "description": "... innovate leveraging ...",
            "date_published": "2020-05-19T06:00:00.000Z",
            "location_city": "Illinois Medical District",
            "location_state": "Illinois",
            "geo_locat": "41.868494,-87.673975"
        },
        ...
    ]
}
``` 
##### 400 (Bad Request)
> Will receive a 400 response if no user(s) found.
```javascript
{
  "message": "No user found"
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

##### 400 (Bad Request)
> Will receive a 400 response if no user(s) found.
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

##### Example Request
##### https://kondo-board-api.herokuapp.com/api/users/email
##### Pass Okta Bearer Token in Authorization Header

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

##### 400 (Bad Request)
> Will receive a 400 response if invalid request
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
  "skills": ["HTML,CSS,React,Angular"],
  "locations": ["New York,Seattle,Denver,Los Angeles"],
  "remote": 0
}
```

##### 201 (Success)
```javascript
{
  "message": "User Spider created successfully!"
}
````

##### 400 (Bad Request)
> Will receive a 400 response if there are missing/invalid fields.
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
  "remote": true,
  "locations": ["Washington DC","San Francisco","New York"],
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

##### 400 (Bad Request)
> Will receive 400 response if you try to update "id" or "email"
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
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

##### 400 (Bad Request)
> Will receive a 400 response if there is a problem with the server
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

### <ins>Save Favorite</ins>
### <em>POST Request</em>
#### URL: /jobs/:user_id/save_job

##### User_id passed in URL, request contains job

##### Example Request
```javascript
{
  "ds_id": "A1549335342",
  "source_url": "[application url]",
  "title": "Data Engineer",
  "company": "capital_one",
  "description": "... innovate leveraging ...",
  "date_published": "2020-05-19",
  "location_city": "Illinois Medical District",
  "location_state": "Illinois",
  "geo_locat": "41.868494,-87.673975"
}
```

##### 201 (Success)
```javascript
{
  "message": "Saved job as favorite"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Invalid Request"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server error"
}
```

*** ***

### <ins>Save Irrelevant</ins>
### <em>POST Request</em>
#### URL: /jobs/:user_id/irrelevant_job

##### User_id passed in URL, request contains job

##### Example Request
```javascript
{
  "ds_id": "A1549335342",
  "source_url": "[application url]",
  "title": "Data Engineer",
  "company": "capital_one",
  "description": "... innovate leveraging ...",
  "date_published": "2020-05-19",
  "location_city": "Illinois Medical District",
  "location_state": "Illinois",
  "geo_locat": "41.868494,-87.673975"
}
```

##### 201 (Success)
```javascript
{
  "message": "Saved job as irrelevant"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Invalid Request"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server error"
}
```

*** ***

### <ins>Get Favorite User Jobs</ins>
### <em>GET Request</em>
#### URL: /users/:user_id/favorite

##### Pass in user_id in the URL
##### https://kondo-board-api.herokuapp.com/api/users/2/favorite

##### 201 (Success)
```javascript
[
    {
        "id": 7,
        "user_id": 2,
        "jobs_id": 7,
        "status": "favorite",
        "archived": 0,
        "ds_id": "A1552121",
        "source_url": "[application url]",
        "title": "Data Engineers",
        "company": "digital_intelligence_systems,_llc",
        "description": "Hi, This is Surya with DISYS, One of our direct client ...",
        "date_published": "2020-05-22",
        "location_city": "Richmond",
        "location_state": "Virginia",
        "geo_locat": "37.959676,-76.711917"
    },
    ...
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "No favorite jobs found for that user"
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
#### URL: /users/:user_id/irrelevant

##### Pass in user_id in the URL
##### https://kondo-board-api.herokuapp.com/api/users/2/irrelevant

##### 201 (Success)
```javascript
[
    {
        "id": 1,
        "user_id": 2,
        "jobs_id": 1,
        "status": "irrelevant",
        "archived": 0,
        "ds_id": "A1549335342",
        "source_url": "[application url]",
        "title": "Data Engineer",
        "company": "capital_one",
        "description": "... innovate leveraging ...",
        "date_published": "2020-05-19",
        "location_city": "Illinois Medical District",
        "location_state": "Illinois",
        "geo_locat": "41.868494,-87.673975"
    }
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "No irrelevant jobs found for that user"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server error"
}
```

*** ***

### <ins>Get All User Tags</ins>
### <em>GET Request</em>
#### URL: /users/:user_id/tag

##### Pass in user_id in the URL
##### https://kondo-board-api.herokuapp.com/api/users/1/tag

##### 201 (Success)
```javascript
[
    {
        "id": 1,
        "user_id": 1,
        "tag_name": "ReactJS",
        "color": "#4287f5"
    },
    {
        "id": 2,
        "user_id": 1,
        "tag_name": "Front End",
        "color": "#34e056"
    },
    {
        "id": 3,
        "user_id": 1,
        "tag_name": "Health Care",
        "color": "#dbde23"
    },
    {
        "id": 4,
        "user_id": 1,
        "tag_name": "Free Coffee",
        "color": "#e31e17"
    }
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to find tags for that user."
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

### <ins>Add Tag</ins>
### <em>POST Request</em>
#### URL: /users/:user_id/tag

##### Pass in user_id in the URL, tag_name is required, color defaults to grey if empty
##### https://kondo-board-api.herokuapp.com/api/users/1/tag

##### Example Request
```javascript
{
    "tag_name": "Agile Development"
}
```

##### 201 (Success)
```javascript
{
    "id": 5,
    "user_id": 1,
    "tag_name": "Agile Development",
    "color": "#c4c4c4"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to create new tag."
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

### <ins>Update Tag</ins>
### <em>POST Request</em>
#### URL: /users/tag/:tag_id

##### Pass in user_id in the URL, tag_name is required, color defaults to grey if empty
##### https://kondo-board-api.herokuapp.com/api/users/tag/5

##### Example Request
```javascript
{
    "tag_name": "Agile"
}
```

##### 201 (Success)
```javascript
{
    "message": "Updated tag successfully"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to create new tag."
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

### <ins>Delete Tag</ins>
### <em>DELETE Request</em>
#### URL: /users/tag/:tag_id

##### Pass in tag_id in the URL
##### https://kondo-board-api.herokuapp.com/api/users/tag/5

##### 201 (Success)
```javascript
{
    "message": "Tag deleted successfully"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Tag not found"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
````


*** ***

### <ins>Add Tag to Job</ins>
### <em>PUT Request</em>
#### URL: /users/tag/update

##### Pass users_jobs_id(saved job id) and tag_id to add
##### https://kondo-board-api.herokuapp.com/api/users/tag/update

##### 201 (Success)
```javascript
{
    "tag_id": 2,
    "users_jobs_id": 3
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to tag job"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
````
