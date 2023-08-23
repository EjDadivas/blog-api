📁routes 🗄️auth.js
Do User Login, make it async
Catch Error
Check email if exists
Check if password is correct

For initial testing:

```
res.status(200).json({ msg: "Logged in" });
```

🍊POST localhost:3000/api/auth/login

```
{
    "email": "johndoe@example.com",
    "password": "password123"
}

```

$ npm install jsonwebtoken
Import jwt
Add a secret key: 🗄️.env
Generate a JWT Token
