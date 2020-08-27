# Requirements
- A user can add, edit and delete 'todo'
- Each todo can be marked as complete
- Each todo can have one optional attachment
- One person cannot access the another person todo

# Technology
1. Node js 
2. Express js 
3. Ejs
4. MongoDB

# API 
__URL = http://localhost:3000;

1. GET All todos for a user by username
`__URL/api/todos/users/:username` <br>
Method: GET<br>

2. GET a todo by todo id <br>
`__URL/api/todos/:id`
