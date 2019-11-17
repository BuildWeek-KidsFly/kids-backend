# KidsFly Back-End Notes

## Roles
- Traveler
- KidsFlyConnection (contractor)
- Admin

# Traveler Information
## **REQUIRED ON SIGNUP**
    {
        "email": "email@email.com",
        "password": "password123"
    }

## **REQUIRED BEFORE USING SERVICE (NOT ON SIGNUP)**
    {
        "name": "Rapper Viper",
        "address": "123 Address Lane",
        "home_airport_code": "LAX",
        "phone": "123-456-7890",
    }

## **CREATING A TRIP**
Traveler must input:

    {
        "airport_name": "Los Angeles Airport",
        "airline": "American Airlines",
        "flight_number": "7658",
        "departure_time": "8:50pm",
        "number_of_items": "5",
        "number_of_children": "14",
        "special": "I want you to be dressed only in Gucci when I arrive"
    }

## **UPDATING/CANCELLING A TRIP**
Traveler can update/cancel a trip. Can change any and all fields that pertain to the trip (airport name, airline, etc.)

Traveler should have a way to notify their KidsFlyConnection that they are 5 minutes away from arrival at airport. Button should also change state and allow a second press upon arrival that alerts KidsFlyConnection.


# KidsFlyConnection Information
- username (email, required on signup)
- password (required on signup)
- role

# Admin Information
- cannot sign up as admin
- has complete CRUD capabilities