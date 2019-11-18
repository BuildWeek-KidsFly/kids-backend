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

    }