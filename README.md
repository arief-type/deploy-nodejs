  

# E-Commerce API with Express and TypeScript

This project is a comprehensive e-commerce API built with Express.js and TypeScript. It provides a robust backend solution for managing an online store, including user authentication, product management, and order processing. The API is designed to handle various e-commerce functionalities such as product CRUD operations, user account management, and making order, all while leveraging the type safety and modern features offered by TypeScript.

## Deployment

The project is currently deployed and available online. You can access the live application at :

```bash
https://final-project-nodejs-58-msyaifullahalarief.vercel.app/
```
### Running Locally

To run this project locally on your machine, follow these steps:

 **1. Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/arief-type/sanber-be-58-final-project-muhammad-syaifullah-al-arief.git
```

 **2. Navigate into the Project Directory**

Move into the project directory:

```bash
cd sanber-be-58-final-project-muhammad-syaifullah-al-arief
```

**3. Install Dependencies**

Install the project dependencies using npm :

```bash
npm install
```
**4. Set Up Environment Variables**

Create a `.env` file in the root of the project and add the required environment variables. You can use the provided `.env.example` as a reference:

```bash
cp .env.example .env
```

**5. Run the Application**

Start the server:
```bash
npm run dev
```

## Tech Stack

  

**Server:** Node, Express, Typescript, Multer, NodeMailer, EJS

  

**Validation:** Yup

  

**Authentication:** JWT Authentication

  

**Storage:** Cloudinary

  

**Database:** MongoDB Atlas

## API Documentation

This section provides detailed documentation for the authentication-related API endpoints available in this project.

**Base URL**
```bash
https://final-project-nodejs-58-msyaifullahalarief.vercel.app/api
```
### Authentication

Most endpoints require authentication. Use the `Authorization` header with a valid JWT token:

```bash
Authorization: Bearer <your-jwt-token>
```
### Endpoints

#### 1. **Login**

-   **Endpoint:** `/auth/login`
-   **Method:** `POST`
-   **Description:** Authenticate a user and return a JWT token.
-   **Request Body:**
```bash
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

-   **Status Code:** `200 OK`
-   **Body:**
```bash
{
    "message": "User logged in successfully",
    "data": "<your-jwt-token>"
}
```
#### 2. **Register**

-   **Endpoint:** `/auth/register`
-   **Method:** `POST`
-   **Description:** Register a new user account.
-   **Request Body:**
```bash
{
"email":  "sarada2@gmail.com",
"fullName":  "sarada2",
"password":  "12345678",
"username":  "sarada2",
"roles":  ["user"]
}
```

**Response:**

-   **Status Code:** `201 Created`
-   **Body:**
```bash
{
    "message": "User registered successfully",
    "data": {
        "fullName": "sarada2",
        "username": "sarada2",
        "email": "sarada2@gmail.com",
        "roles": [
            "user"
        ],
        "profilePicture": "default.jpg",
        "_id": "66b5fa8de2a284cbc3b09e",
        "createdAt": "2024-08-09T11:16:29.749Z",
        "updatedAt": "2024-08-09T11:16:29.749Z",
        "__v": 0
    }
}
```

#### 3. **Get Profile**

-   **Endpoint:** `/auth/me`
-   **Method:** `GET`
-   **Description:** Retrieve the profile of the authenticated user. Requires the user to be an admin.
-   **Request Headers:**
    -   `Authorization: Bearer <your-jwt-token>`
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
 ```bash
{
    "message": "User details",
    "data": {
        "_id": "66acab239b3b3bdb1b49f1",
        "fullName": "admin",
        "username": "admin",
        "email": "admin@gmail.com",
        "roles": [
            "admin"
        ],
        "profilePicture": "default.jpg",
        "createdAt": "2024-08-02T09:47:15.275Z",
        "updatedAt": "2024-08-02T09:47:15.275Z",
        "__v": 0
    }
}
```
#### 4. **Update Profile**

-   **Endpoint:** `/auth/profile`
-   **Method:** `PUT`
-   **Description:** Update the profile of the authenticated user.
-   **Request Headers:**
    -   `Authorization: Bearer <your-jwt-token>`
-   **Request Body:**
 ```bash
{
"fullName":  "sakura",
"password":  "12345678",
"profilePicture":  "sakura.png"
}
```
**Response:**

-   **Status Code:** `200 OK`
-   **Body:**
 ```bash
{
    "message": "Profile updated successfully",
    "data": {
        "_id": "66b231e603564da8881b1e0e",
        "fullName": "sakura",
        "username": "sarada",
        "email": "sarada@gmail.com",
        "roles": [
            "user"
        ],
        "profilePicture": "sakura.png",
        "createdAt": "2024-08-06T14:23:34.681Z",
        "updatedAt": "2024-08-09T11:34:57.621Z",
        "__v": 0
    }
}
```


## Feedback

I welcome and appreciate your feedback on this project. Your input is valuable and helps me improve and refine the application. Here’s how you can provide feedback or get in touch:

### Reporting Issues

If you find any bugs or issues with the project, please report them by opening a new issue on my [GitHub Issues page](https://github.com/your-username/your-repository/issues). When reporting issues, include:

-   A clear and descriptive title
-   A detailed description of the problem
-   Steps to reproduce the issue
-   Any relevant screenshots or error messages

### Providing Suggestions

If you have suggestions for new features or improvements, please feel free to share them. You can submit your suggestions by creating a new issue on my [GitHub Issues page](https://github.com/your-username/your-repository/issues) with the label `enhancement`. Be sure to provide a clear explanation of your idea and how it could enhance the project.

### Contact

For any direct feedback, questions, or general inquiries, you can reach me at:


-   **LinkedIn:** [My Linkedin Profile](https://www.linkedin.com/in/muhammad-syaifullah-al-arief/)

Thank you for your interest in my project and for taking the time to provide feedback!