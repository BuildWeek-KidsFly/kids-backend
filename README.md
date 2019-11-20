# KidsFly Backend

[Heroku App](https://kidsfly-be-dakotah.herokuapp.com/)

## Authentication Endpoints:

**Connections and users have different endpoints for login and signup, however require and return the same information upon successful logins/registers. See connections endpoints below.**

## (users) **POST** /api/auth/register

#### Expected request body:

    {
        "email": "email@email.com",
        "password": "password123",
        "home_airport": "LAX"
    }

**Returns:**

    {
        "id": 4,
        "email": "email@email.com",
        "home_airport": "LAX"
    }

## (users) **POST** /api/auth/login

**Expected request body:**

    {
        "email": "email@email.com",
        "password": "password123"
    }

**Returns:**

    {
        "message": "Login successful, have a token",
        "id": 3,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MTA2MjAxLCJleHAiOjE1NzQxOTI2MDF9.2e86pVoODyESq7hq-rQgBmh04ms64fdcbuK5PJxQ2ms"
    }

## (connections) **POST** /api/auth/connections/login

## (connections) **POST** /api/auth/connections/register

# User/trip (protected) endpoints:

## **GET** /api/users/

**Gets list of all users. You probably don't need this, but it's here anyway if you find a reason to use it. This will be the baseURL for the next couple of endpoints, and every url beginning with /api/users will require the authorization header.**

#### Expects headers:

    {
        "authorization": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MTA2MjAxLCJleHAiOjE1NzQxOTI2MDF9.2e86pVoODyESq7hq-rQgBmh04ms64fdcbuK5PJxQ2ms
    }

## **GET** /api/users/:id

#### Gets user information based on id

## **PUT** /api/users/:id

#### Update user information (these fields are required to create a trip)

    {
        "name": "riff raff",
        "address": "777 pink panther lane",
        "phone": "777-777-7777"
    }

## **GET** /api/users/:id/trips

#### Returns (all trips assigned to this user):

    [
        {
            "id": 1, // this is the trip id, not the user id
            "airport_name": "Los Angeles International Airport",
            "airline": "American Airlines",
            "flight_number": "7658",
            "departure_time": "8:50pm",
            "number_of_items": 5,
            "number_of_children": 14,
            "special": "I want you to be dressed only in Gucci when I arrive"
        },
        {...},{...},{...}
    ]

## **POST** /api/users/:id/trips

#### Creates a trip for a specific user

#### Expected request body:

    {
        "id": 1, // this is the trip id, not the user id
        "airport_name": "Los Angeles International Airport",
        "airline": "American Airlines",
        "flight_number": "7658",
        "departure_time": "8:50pm",
        "number_of_items": 5,
        "number_of_children": 14,
        "special": "I want you to be dressed only in Gucci when I arrive" // OPTIONAL
    }

#### Returns:

    {
        "message": "trip created"
    }

## **PUT** /api/users/:id/trips/:tripId

#### Updates specific trip for specific user

#### Expected request body:

    {
        "id": 1, // this is the trip id, not the user id
        "airport_name": "Los Angeles International Airport",
        "airline": "American Airlines",
        "flight_number": "7658",
        "departure_time": "8:50pm",
        "number_of_items": 5,
        "number_of_children": 14,
        "special": "I want you to be dressed only in Gucci when I arrive" // OPTIONAL
    }

#### Returns:

    {
        "message": "Trip successfully updated",
        "updated": true
    }

# Connections (protected) endpoints:

**The following endpoints will require authorization headers.**

## **GET** /api/connections

**Gets list of all connections. You probably don't need this, but it's here anyway if you find a reason to use it. **

#### Expects headers:

    {
        "authorization": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MTA2MjAxLCJleHAiOjE1NzQxOTI2MDF9.2e86pVoODyESq7hq-rQgBmh04ms64fdcbuK5PJxQ2ms
    }

#### Returns:

    [
        {
            "id": 1,
            "email": "connection@connection.com",
            "home_airport": "LAX"
        },
        {...},{...},{...}
    ]

## **GET** /api/connections/:id/

**Gets single connection based on id**

#### Returns:

    {
    "id": 1,
    "email": "connection@connection.com",
    "home_airport": "LAX"
    }

## **GET** /api/connections/:id/trips

**Gets list of this connection's trips, based on id of the connection**

#### Returns:

    [
        {
            "id": 3,
            "airport_name": "world meme airport",
            "airline": "Southwest Airlines",
            "flight_number": "9999",
            "departure_time": "12:15pm",
            "number_of_items": 2,
            "number_of_children": 0,
            "special": "have 12 big ol doinks ready for me",
            "completed": 0
        },
        {...},{...},{...}
    ]
