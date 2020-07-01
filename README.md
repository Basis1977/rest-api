# REST API
RESTful API based on Expressjs.

## Features
- Sign up/sign in (JWT, bcrypt)
- Manage your account: update, delete

## Installation

#### Requirements

- npm
- node >= 8
- MongoDB ~3.6
- Create Database named "rest-api"

```
git clone https://github.com/Basis1977/rest-api/
cd rest-api
npm install
```

Start MongoDB

```
./mongod.exe --dbpath "C:/data"
```

Run application

```
node index.js
```

Say hello!

```
curl 127.0.0.1:8080
```

## Call the API

As best practice, use these headers to make requests to the API:

```
Content-Type:application/json
Accept:application/json
```

When signed in, you must provide the access token:

```
Authorization: <Access_token>
```

**Note: The token is valid for 3 hours. After that delay you have to sign in again to get another one.**

## Register
curl --header "Accept: application/json" \
 --header "Content-Type: application/json" \
 --request POST "http://localhost:8080/auth/register" \
 --data '
   {
    "firstname": "Sreenivas",
    "lastname": "Basi",
    "email": "sreeni.aws9@gmail.com",
    "password": "<PASSWORD>"
   } '

## Login

curl --header "Accept: application/json" \
 --header "Content-Type: application/json" \
 --request POST "http://localhost:8080/auth/login" \
 --data '
   {
    "email": "sreeni.aws9@gmail.com",
    "password": "<PASSWORD>"
   } '

## GetMovie

curl --header "Accept: application/json" \
 --header "Content-Type: application/json" \
 --header "Authorization: <ACCESS_TOKEN_AFTER_LOGIN>" \
 --request GET "http://localhost:8080/omdb/getMovie?title=Respect"

## GetBook
    curl --header "Accept: application/json" \
    --header "Content-Type: application/json" \
    --header "Authorization: <ACCESS_TOKEN_AFTER_LOGIN>" \
    --request GET "http://localhost:8080/openlib/getBook?isbn=ISBN:0201558025"

## API response

The response code will never be in the response.

**Make operations** (create, update, delete ...)

Validation error example:

```json
{
    "success": false,
    "message": "Form is invalid.",
    "errors": [
        {
            "message": "\"password\" is required",
            "path": [
                "password"
            ],
            "type": "any.required",
            "context": {
                "key": "password",
                "label": "password"
            }
        }
    ]
}
```
