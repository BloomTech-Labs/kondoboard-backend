# Kondoboard Backend Database
## https://kondo-board-api.herokuapp.com/api
##### All endpoints start with /api
##### Table structures are in TABLES.md

*** ***

##### Structure works by: /routes -> /controller -> /stores
###### Routes contain the endpoints, and pass URL/request data to controller
###### Controllers manipulate data if needed, most will only pass the data to the stores 
###### Stores are used to access the Database, and return response to controllers, then back to routes

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

#### Saved Jobs
- [Add Tag to Job](#Add-Tag-to-Job)
- [Get User Job](#Get-User-Job)
- [Update User Job](#Update-User-Job)

#### Board Columns
- [Get User Columns](#Get-User-Columns)
- [Add Column](#Add-Column)
- [Update Column](#Update-Column)
- [Delete Column](#Delete-Column)

#### Organize Jobs
- [Get Applied Jobs](#Get-Applied-Jobs)
- [Get User Job Columns](#Get-User-Job-Columns)
- [Add Job to Column](#Add-Job-to-Column)
- [Change Job Column](#Change-Job-Column)

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
#### URL: /users/:user_id/tag/:users_jobs_id

##### Pass in user_id and users_jobs_id(saved job ID) in the URL
##### https://kondo-board-api.herokuapp.com/api/users/1/tag/4

##### 201 (Success)
```javascript
[
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
    },
    ...
    {
        "users_jobs_id": "4"
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
#### URL: /users/:user_id/tag/:users_jobs_id

##### user_id and users_jobs_id(saved job ID) passed in URL
##### tag_name is required, color defaults to grey if empty
##### https://kondo-board-api.herokuapp.com/api/users/1/tag/3

##### Example Request
```javascript
{
    "tag_name": "Unlimited Vacay!"
}
```

##### 201 (Success)
```javascript
{
    "id": 21,
    "user_id": 1,
    "tag_name": "Unlimited Vacay!",
    "color": "#c4c4c4",
    "users_jobs_id": "4"
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

*** ***

### <ins>Get User Job</ins>
### <em>GET Request</em>
#### URL: /users/saved_job/:users_jobs_id

##### Pass users_jobs_id(saved job id)

##### 201 (Success)
```javascript
{
    "id": 5,
    "user_id": 3,
    "jobs_id": 2,
    "tags": [],
    "status": "favorite",
    "archived": false,
    "notes": "",
    "applied": false
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to find saved job"
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

### <ins>Update User Job</ins>
### <em>PUT Request</em>
#### URL: /users/saved_job/:users_jobs_id

##### Pass users_jobs_id(saved job id) in URL
##### Changes passed in body

##### Example Request
```javascript
{
    "applied": true,
    "notes": "Hope to work here"
}
```

##### 201 (Success)
```javascript
{
    "Updated successfully"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to update saved job"
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

### <ins>Get User Columns</ins>
### <em>GET Request</em>
#### URL: /jobs/:user_id/column

##### user_id passed in URL

##### 201 (Success)
```javascript
[
    {
        "id": 2,
        "user_id": 1,
        "name": "Phone Interview",
        "location": 2,
        "savedJobs": [
            3,
            2,
            3
        ]
    },
    {
        "id": 3,
        "user_id": 1,
        "name": "First Interview",
        "location": 3,
        "savedJobs": [
            4
        ]
    },
    ...
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to get columns"
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

### <ins>Add Column</ins>
### <em>POST Request</em>
#### URL: /jobs/:user_id/column

##### Example request
```javascript
{
    "name": "New Jobs",
    "location": 5
}
````

##### 201 (Success)
```javascript
{
    "message": "Column added"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to update saved job"
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

### <ins>Update Column</ins>
### <em>PUT Request</em>
#### URL: /jobs/column/:column_id

##### Pass column_id in URL
##### Changes passed in body

##### Example Request
```javascript
{
    "location": 6
}
```

##### 201 (Success)
```javascript
{
    "message": "Updated column"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to make column changes"
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

### <ins>Delete Column</ins>
### <em>DELETE Request</em>
#### URL: /jobs/column/:column_id

##### Pass column_id in URL
##### Changes passed in body

##### Example Request
```javascript
{
    "location": 6
}
```

##### 201 (Success)
```javascript
{
    "message": "Column deleted"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to find column"
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

### <ins>Get Applied Jobs</ins>
### <em>GET Request</em>
#### URL: /users/:user_id/applied

##### user_id in URL

##### 201 (Success)
```javascript
[
    {
        "id": 1,
        "user_id": 1,
        "jobs_id": 1,
        "tags": [
            "3",
            "4"
        ],
        "status": "favorite",
        "archived": false,
        "notes": "Cool title and good location",
        "applied": true,
        "ds_id": "A1549335342",
        "source_url": "[application url]",
        "title": "Data Engineer",
        "company": "capital_one",
        "description": "... innovate leveraging ...",
        "date_published": "2020-05-19T06:00:00.000Z",
        "location_city": "Illinois Medical District",
        "location_state": "Illinois",
        "geo_locat": "41.868494,-87.673975",
        "users_jobs_id": 1,
        "columns_id": 1
    },
    ...
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
    "message": "No applied jobs found for that user"
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

### <ins>Get User Job Columns</ins>
### <em>GET Request</em>
#### URL: /jobs/column/:user_id

##### Pass user_id in URL
##### users_jobs_id & columns_id are how jobs are connected to a column
##### id in this response is job_column_id to pass into the URL on [Change Job Column](#Change-Job-Column)

##### 201 (Success)
```javascript
[
    {
        "id": 1,
        "users_jobs_id": 1,
        "columns_id": 1
    },
    {
        "id": 2,
        "users_jobs_id": 2,
        "columns_id": 5
    }
]
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to add job to column"
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

### <ins>Add Job to Column</ins>
### <em>POST Request</em>
#### URL: /jobs/column/

##### Pass in users_jobs_id(saved job) and columns_id(id of column) in body

##### Example Request
```javascript
{
    "users_jobs_id": 1,
    "columns_id": 1
}
```

##### 201 (Success)
```javascript
{
    "message": "Job added to column"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to add job to column"
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

### <ins>Change Job Column</ins>
### <em>PUT Request</em>
#### URL: /jobs/column/update/job

##### Pass in users_jobs_id and columns_id in body
##### Can only update columns_id

##### Example Request
```javascript
{
    "users_jobs_id": 12
    "columns_id": 5
}
```

##### 201 (Success)
```javascript
{
    "message": "Job column changed"
}
```

##### 400 (Bad Request)
> Will receive a 400 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Unable to change column"
}
```

##### 500 (Internal Server Error)
> Will receive a 500 response if there is a problem with the server
```javascript
{
  "error": "Server Error"
}
````
