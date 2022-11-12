# ToDoList-API

API ini digunakan untuk memenuhi tugas TPA 5 SIB Batch 3 (Skilvul).

## Built With

- expressjs - Backend for JS
- mongodb - NoSQL Database
- mongoose - ODM
- jsonwebtoken - AUTH
- bcrypt - Hash

## How to use

1. Clone this repository

```
git clone https://github.com/Chopin44/ToDoList-API.git
```

2. Enter into the folder

```
https://github.com/Chopin44/ToDoList-API.git
```

3. Installing all dependencies

```
npm install
```

4. run project

```
npm run dev
```

# APIs Specifications

## Users

### A. Register

Serves for creating new users.

- Method : POST
- Endpoint : /api/user/register
- Body:

```
{
    name:  String,
    class: String,
    email: String,
    // add Hash at here
    password: String,
}
```

- response

```
{
        "message": "Register success!"
}
```

### B. Login

Serves for enter the apps.

- Method: POST
- Endpoint: /api/user/login
- Body:

```
{
    "email":"string",
    "password": "string"
}
```

- Response:

```
{
          "message": "Login success!",
          "token",
}
```

## ToDo

### A. Get All Task

Serves to get all task

- method : GET
- Endpoint: /api/task
- Header :
  - authorization : `token`
- Response :

```
{
    "message": "string",
    "data": [
      {
        "_id": "string",
        "title": "string"
      }
    ]
}
```

### B. Get Detail Task By ID

Serves to get Detail task by ID

- method : GET
- Endpoint: api/task/detail/:id
- Header:
  - Authorization: `token`
- Response:

```
{
    "message": "string",
    "data": {
    "_id": "string",
    "title": "string",
    "description": "string",
    "isDone": boolean,
    "user": {
      "_id": "string",
      "name": "string",
      "class": "string"
    },
}

```

### C. Update Task By ID

Serves to update task by ID

- Method : PUT
- Endpoint: api/task/:id
- Header:
  - Authorization: `token`
- Response :

```
    {
        message: "update Data success",
    }
```

### D. Delete Task By ID

Serves to delete Taskk by ID

- Method : Delete
- Endpoint: api/task/:id
- Header:
  - Authorization: `token`
- Response :

```
{
    message: "delete Data success",
}

```

### E. Delete All Task

serves to delete All Task

- Method : Delete
- Endpoint: api/task/
- Header:
  - Authorization: `token`
- Response :

```
{
    message: "delete Data success",
}

```
