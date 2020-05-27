# Kondoboard Users DB
## https://kondo-board-api.herokuapp.com/api
##### All endpoints start with /api

*** ***

#### Endpoints
###### ** = not currently working

##### Users
- [Get All User Data](#Get-All-User-Data) - Data Science
- [Get All User Info](#Get-All-User-Info)
- [Get Single User Info](#Get-Single-User-Info)
- [Update User](#Update-User) - Change everything except skills and locations
- [Register](#Register) **
- [Login](#Login) **
- [Delete User](#Delete-User)

##### Users Info
- [Add Skill](#Add-Skill)
- [Delete Skill](#Delete-Skill) **
- [Add Location](#Add-Location) **
- [Delete Location](#Delete-Location) **

##### Jobs
- [Get All Jobs](#Get-All-Jobs)
- [Get Job](#Get-Job) **
- [Add Job](#Add-Job)
- [Update Job](#Update-Job)

##### Users Saved Jobs
- [Get Favorite User Jobs](#Get-Favorite-User-Jobs) **
- [Save Favorite User Job](#Save-Favorite-User-Job) **
- [Get Irrelevant User Jobs](#Get-Irrelevant-User-Jobs) **
- [Save Irrelevant User Job](#Save-Irrelevant-User-Job) **

*** ***

### <ins>Get All User Data</ins>
### <em>GET Request</em> 
#### URL: /ds 

##### Will return every user
##### https://kondo-board-api.herokuapp.com/api/ds

##### 200 (Success) 
```javascript
...
  { 
        "user": {
            "id": 1,
            "first_name": "Spider",
            "last_name": "Man",
            "email": "peterparker@newyork.com",
            "profile_image": "",
            "user_track": "Web",
            "skills": "HTML,CSS,JavaScript,React,Node,Express",
            "locations": "New York,London,Los Angeles",
            "remote": 1
        },
        "savedJobs": [
            {
                "id": 1,
                "datascience_id": "A1521288337",
                "source_url": "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
                "title": "Data Engineer",
                "description": "Description We are seeking a highly talented Data Engineer (DE) within the Data Engineering group. We need your help to build systems to enable data-driven decision-making. Our ...  Data Engineering team owns and develops the technology platform that offers decision makers both performance metrics and analysis as well as the self-service capability to perform ...",
                "date_published": "2020-04-14",
                "location_raw": "Newark"
            },
           ...
        ],
        "irrelevantJobs": [
            {
                "id": 2,
                "datascience_id": "A1550124138",
                "source_url": "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B39FEC3E207E",
                "title": "Data Engineer",
                "description": "Hi, Please find the below requirements. You can respond back with an updated resume to praveenrajpvkc.com Title Data Engineer (Azure Data Engineer )Location Redmond, WAClient ...  Microsoft Note We are looking for a Data Engineer with Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python Responsibilities bull Build and maintain ETL ...",
                "date_published": "2020-05-20",
                "location_raw": "Redmond"
            }
        ]
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

*** ***

### <ins>Get All User Info</ins>
### <em>GET Request</em> 
#### URL: /users 

##### Will return every user
##### https://kondo-board-api.herokuapp.com/api/users

##### 200 (Success) 
```javascript
...
  { 
        "user": {
            "id": 1,
            "first_name": "Spider",
            "last_name": "Man",
            "email": "peterparker@newyork.com",
            "profile_image": "",
            "user_track": "Web",
            "skills": "HTML,CSS,JavaScript,React,Node,Express",
            "locations": "New York,London,Los Angeles",
            "remote": 1
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
#### URL: /users/:user_id

##### 200 (Success) 
##### https://kondo-board-api.herokuapp.com/api/users/2
```javascript
  {
    "id": 2,
    "first_name": "Spider",
    "last_name": "Man",
    "email": "peterparker@newyork.com",
    ...
    "skills": "HTML,CSS,JavaScript,React,Node,Express",
    "cities": "New York,London,Los Angeles",
    "remote": 1
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

### <ins>Update User</ins>
### <em>PUT Request</em>
#### URL: /users/:user_id

##### You can update single, or multiple fields at a time
##### Updating [cities](#Add-City) and [skills](#Add-Skill) have their own endpoints 

##### Example Request
```javascript
{
  "first_name": "Frodo",
  "last_name": "Baggins",
  "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg",
  "remote": true
}
```

##### 201 (Success)
```javascript
{
    "id": 1,
    "first_name": "Frodo",
    "last_name": "Baggins",
    "email": "peterparker@newyork.com",
    "profile_image": "https://image.flaticon.com/icons/svg/188/188987.svg",
    "user_track": "Web",
    "skills": "HTML,CSS,JavaScript,React,Node,Express",
    "locations": "New York,London,Los Angeles",
    "remote": 1
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

### <ins>Register User</ins>
### <em>POST Request</em>
#### URL: /auth/register

##### Example Request
```javascript
{
  "first_name": "Spider",
  "last_name": "Pig",
  "email": "spiderpig@gmail.com",
  "profile_image": "",
  "user_track": "Web",
  "skills": "HTML,CSS,JavaScript,React,Node,Express",
  "locations": "New York,London,Phoenix",
  "remote": false
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
### <em>POST Request</em>
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

### <ins>Add Skill</ins>
### <em>PUT Request</em>
#### URL: /users/:user_id/skill

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

### <ins>Delete Skill</ins>
### <em>PUT Request</em>
#### URL: /users/:user_id/skill

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

### <ins>Add Location</ins>
### <em>PUT Request</em>
#### URL: /users/:user_id/addLocation

##### Example Request
```javascript
{
    "location": "Boston"
}
```

##### 201 (Success)
```javascript
{
  "message": "Boston has been added to location"
}
```

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error adding location"
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

### <ins>Delete Location</ins>
### <em>PUT Request</em>
#### URL: /users/:user_id/deleteLocation

##### Example Request
```javascript
{
    "location": "Los Angeles"
}
```

##### 201 (Success)
```javascript
{
  "message": "Los Angeles has been removed from locations"
}
````

##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "Error deleting location"
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

### <ins>Get All Jobs</ins>
### <em>GET Request</em>
#### URL: /jobs

##### 201 (Success)

######
```javascript
{
  {
      "id": 1,
      "datascience_id": "A1521288337",
      "source_url": "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
      "title": "Data Engineer",
      "description": "Description We are seeking a highly talented ...",
      "date_published": "2020-04-14",
      "location_raw": "Newark"
  },
  ...
}
````


##### 404 (Bad Request)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "message": "No jobs were found."
}
```

##### 500 (Internal Server Error)
> Will receive a 404 response if no user id, if unmatching field, or no fields exist
```javascript
{
  "error": "Server Error"
}
```

*** ***

### <ins>Get Job</ins>
### <em>GET Request</em>
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

*** ***

### <ins>Add Job</ins>
### <em>POST Request</em>
#### URL: /jobs

##### Example Request
```javascript
{
  "datascience_id": "A1521288447",
  "source_url": "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
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

### <ins>Update Job</ins>
### <em>POST Request</em>
#### URL: /:job_id

#### example request
``` javascript
{
  "message": "not sure if we need this endpoint?"
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

### <ins>Get Favorite User Jobs</ins>
### <em>GET Request</em>
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
### <em>POST Request</em>
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

*** ***

