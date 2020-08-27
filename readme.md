# Requirements
- A user can add, edit and delete 'todo'
- Each todo can be marked as complete
- Each todo can have one optional attachment
- One person cannot access the another person todo

# Technology
1. Node js 
2. Express js 
3. MongoDB

# API 
__Site URL__ = http://localhost:3000;

###### Get all todo list by username
```
URL: __Site URL__/api/todos/users/{username}
Request Type: GET
Example: http://localhost:3000/api/todos/users/{username}
```

###### Get a todo by id
```
URL: __Site URL__/api/todos/{id}
Request Type: GET
```

###### Create a new todo

```
URL: __Site URL__/api/todos
Request Type: POST
Parameter: {
"username" : "",
"todo" : "",
"isDone" : "",
"hasAttachment" : "",
}
```

###### Update a todo

```
URL: __Site URL__/api/todos/{id}
Request Type: PUT
Parameter: {
"todo" : "",
"isDone" : "",
"hasAttachment" : "",
}
```

###### Delete a todo by id
```
URL: __Site URL__/api/todos/{id}
Request Type: DELETE
```

## Installation guidelines
1. Clone and open the project then install all npm package by <br>
`npm install`

2. Now go to config/ directory and rename the <b>config.json.example</b> to <b>config.json</b> <br>

3. Update the config.json with your mongo db configuration. <br>

4. Now run project by 
`node app.js`
