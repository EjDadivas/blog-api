📁routes 🗄️auth.js
Import user
Do User registration, make it async
Catch Error
Check email if exists
Create new user unhashed

🍊POST localhost:3000/api/auth/register

```
{
    "username": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
}

```

🍀User
Notice that we can see the password
Delete

$ npm install bcryptjs
Import package
Hash Password
Create new User

🍊POST localhost:3000/api/auth/register

```
{
    "username": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
}

```

🍀User
Notice that we are able to has it
