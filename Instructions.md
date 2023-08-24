📁controllers 🗄️authController.js
Transfer imports [bcrypt, jwt, User]
registerUser() - cut and paste
loginUser() - cut and paste
export

📁routes 🗄️auth.js
Import controllers

Test

🍊POST localhost:3000/api/auth/register

```
{
    "username": "Jane Smith",
    "email": "janesmith@example.com",
    "password": "password456"
}

```

🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith@example.com",
    "password": "password456"
}

```
