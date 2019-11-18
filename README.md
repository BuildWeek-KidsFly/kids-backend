# KidsFly Backend

## Authentication Endpoints:

## (users) POST /api/auth/register

**Expected request body:**

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

## (users) POST /api/auth/login

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
