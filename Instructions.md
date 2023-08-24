📁routes 🗄️auth.js
router.patch("/change-password");
router.patch("/change-email");

📁controllers 🗄️authController.js
changePassword() res.status(200).json({msg: "change password"})
changeEmail() res.status(200).json({msg: "change email"})

export
📁routes 🗄️auth.js
import

Test
🍊PATCH localhost:3000/api/auth/change-password
🍊PATCH localhost:3000/api/auth/change-email

📁controllers 🗄️authController.js
changePassword()

- async
- trycatch, error
  > try
- get password from the req.body. then send response in json
  🍊PATCH localhost:3000/api/auth/change-password
  {
  "password": "newpassword"
  }

PROBLEM:

1. How to know which user is logged in?
2. Only logged in users can change their passwords

Login and Get Token
🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith@example.com",
    "password": "password456"
}
```

🍊PATCH localhost:3000/api/auth/change-password
Authorization > Bearer Token > paste token

```
 {
  "password": "newpassword"
  }
```

Create a middleware to get the User by using the token
📁middlewares 🗄️auth.js
authMiddleware()
-async
-check authorization token
-get token
-trycatch, add error
-verify
-Get user

export
📁routes🗄️auth.js
import

changePassword - add authMiddleware
🍊PATCH localhost:3000/api/auth/change-password

Test middleware with dummy jwt
🍊PATCH localhost:3000/api/auth/change-password
Authorization > Bearer Token > paste token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjMwMDAwMDAwLCJleHAiOjE2MzEwMDAwMDB9.QFwTNNq4sev0qt5iPG84zqo4HfgcqKJrBwTAsU_qQwA

```
 {
  "password": "newpassword"
  }
```

=Request is not authorized
copy the authorization token again from the login

📁controllers 🗄️authController.js
changePassword();
We added user to the request. we can get it by
res.status(200).json(req.user);

> Test: res: req.user

🍊PATCH localhost:3000/api/auth/change-password

```
{
"password": "newpassword"
}

```

> Get the userId
> Unhashed updated user
> 🍀Refresh and Check Users table
> Notice that the password is not hash

> Copy registerUser() Hash the Password
> change to hashedPassword

TEST
🍊PATCH localhost:3000/api/auth/change-password

```
{
"password": "newpassword"
}

```

> 🍀Refresh and Check Users table
> =It should be hashed now.
> Test by logging in

Login with the old and newpassword

🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith@example.com",
    "password": "password456"
}
```

=invalid password

🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith@example.com",
    "password": "newpassword"
}
```

changeEmail();
-async
-trycatch, error

> try

-req.body is email
-get userId
-copy updated in changePassword and replace password to email

Test:

🍊PATCH localhost:3000/api/auth/change-email

```
{
    "email": "janesmith2@example.com"
}
```

🍀Check Email

Test Login

🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith@example.com",
    "password": "newpassword"
}
```

= Email not found
🍊POST localhost:3000/api/auth/login

```
{
    "email": "janesmith2@example.com",
    "password": "newpassword"
}
```
