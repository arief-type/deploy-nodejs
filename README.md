# E-Commerce API with Express and TypeScript

This project is a comprehensive e-commerce API built with Express.js and TypeScript. It provides a robust backend solution for managing an online store, including user authentication, product management, and order processing. The API is designed to handle various e-commerce functionalities such as product CRUD operations, user account management, and making order, all while leveraging the type safety and modern features offered by TypeScript.


## Table of Contents
1. [Introduction](#introduction) 
2.  [Deployment](#deployment) 
3. [Running Locally](#running-locally) 
4. [API Documentation](#api-documentation) 
	- [Auth](#authentication) 
	- [Products](#products)
	-  [Categories](#categories)
	- [Orders](#orders)
	- [Uploads](#uploads)
5.  [Feedback](#feedback) 

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
## Products

#### 1. **Get All Products**

-   **Endpoint:** `/products`
-   **Method:** `GET`
-   **Description:** Retrieve a list of all products.
- **Query Parameters:**

	-   `page` (optional): The page number for pagination (default is `1`).
	-   `limit` (optional): The number of products per page (default is `10`).
	-   `search` (optional): A search term to filter products by name.
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
 ```bash
{
    "data": [
        {
            "_id": "66a458718f3a5aced5c4f931",
            "name": "internet coffee",
            "description": "minuman",
            "images": [
                "coffee.png"
            ],
            "price": 10000,
            "qty": 197,
            "category": {
                "_id": "66a21e463b2ea2cf2b1a2bb4",
                "name": "coffee",
                "createdAt": "2024-07-25T09:43:34.282Z",
                "updatedAt": "2024-07-25T09:43:34.282Z",
                "__v": 0
            },
            "createdAt": "2024-07-27T02:16:17.638Z",
            "updatedAt": "2024-08-07T23:37:29.800Z",
            "slug": "internet-coffee",
            "__v": 0
        },
        {
            "_id": "66a4476e9d875f425b18f3ba",
            "name": "Kemeja Variant 1",
            "description": "Deskripsi kemeja variant 1",
            "images": [
                "https://res.cloudinary.com/five-code/image/upload/v1718805645/fxuurm45mt5talry7a29.png",
                "sepatu2.jpg",
                "sepatu3.jpg"
            ],
            "price": 20000,
            "qty": 120,
            "slug": "variant-1-slug",
            "category": null,
            "createdAt": "2024-07-27T01:03:42.988Z",
            "updatedAt": "2024-07-27T01:03:42.988Z",
            "__v": 0
        }
    ],
    "message": "Success get all products",
    "page": 1,
    "limit": 2,
    "total": 58,
    "totalPages": 29
}
```
#### 2. **Create Product**

-   **Endpoint:** `/products`
-   **Method:** `POST`
-   **Description:** Create a new product.
-   **Request Body:**
 ```bash
{
"name":  "indomaret coffee",
"description":  "minuman",
"images":  ["photo-coffee.png"],
"price":  10000,
"qty":  200,
"category":  "66a21e463b2ea2cf2b1a2bb4"
}
```

**Response:**

-   **Status Code:** `201 Created`
-   **Body:**
 ```bash
{
"name":  "indomaret coffee",
"description":  "minuman",
"images":  ["photo-coffee.png"],
"price":  10000,
"qty":  200,
"category":  "66a21e463b2ea2cf2b1a2bb4"
}
```

#### 3. **Get Product by ID**

-   **Endpoint:** `/products/:id`
-   **Method:** `GET`
-   **Description:** Retrieve details of a specific product by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the product.
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
   ```bash
{
    "data": {
        "_id": "66b69a7010d8375133d533f5",
        "name": "indomaret coffee",
        "description": "minuman",
        "images": [
            "photo-coffee.png"
        ],
        "price": 10000,
        "qty": 200,
        "category": "66a21e463b2ea2cf2b1a2bb4",
        "createdAt": "2024-08-09T22:38:40.544Z",
        "updatedAt": "2024-08-09T22:38:40.544Z",
        "slug": "indomaret-coffee",
        "__v": 0
    },
    "message": "Success get one product"
}
```
#### 4. **Update Product**

-   **Endpoint:** `/products/:id`
-   **Method:** `PUT`
-   **Description:** Update an existing product by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the product.
-   **Request Body:**
   ```bash
{
"name":  "alfamaret coffee",
"description":  "minuman",
"images":  ["photo-coffee.png"],
"price":  10000,
"qty":  100,
"category":  "66a1de179d50bebe3af45595"
}
```
**Response:**

-   **Status Code:** `200 OK`
-   **Body:**
   ```bash
{
    "data": {
        "_id": "66b69a7010d8375133d533f5",
        "name": "alfamaret coffee",
        "description": "minuman",
        "images": [
            "photo-coffee.png"
        ],
        "price": 10000,
        "qty": 100,
        "category": "66a1de179d50bebe3af45595",
        "createdAt": "2024-08-09T22:38:40.544Z",
        "updatedAt": "2024-08-09T22:49:57.060Z",
        "slug": "indomaret-coffee",
        "__v": 0
    },
    "message": "Success update product"
}
```

#### 5. **Delete Product**

-   **Endpoint:** `/products/:id`
-   **Method:** `DELETE`
-   **Description:** Delete a product by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the product.
  
	**Response:**

-   **Status Code:** `200 OK`
-   **Body:**

  ```bash
{
    "data": {
        "_id": "66b69a7010d8375133d533f5",
        "name": "alfamaret coffee",
        "description": "minuman",
        "images": [
            "photo-coffee.png"
        ],
        "price": 10000,
        "qty": 100,
        "category": "66a1de179d50bebe3af45595",
        "createdAt": "2024-08-09T22:38:40.544Z",
        "updatedAt": "2024-08-09T22:49:57.060Z",
        "slug": "indomaret-coffee",
        "__v": 0
    },
    "message": "Success delete product"
}
```

## Categories

#### 1. **Get All Categories**

-   **Endpoint:** `/categories`
-   **Method:** `GET`
-   **Description:** Retrieve a list of all category.
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
 ```bash
{
    "data": [
        {
            "_id": "66a21dc33b2ea2cf2b1a2bae",
            "name": "tea",
            "createdAt": "2024-07-25T09:41:23.927Z",
            "updatedAt": "2024-07-25T09:41:23.927Z",
            "__v": 0
        },
        {
            "_id": "66a21e463b2ea2cf2b1a2bb4",
            "name": "coffee",
            "createdAt": "2024-07-25T09:43:34.282Z",
            "updatedAt": "2024-07-25T09:43:34.282Z",
            "__v": 0
        }
    ],
    "message": "Success get all products"
}
```
#### 2. **Create Categories**

-   **Endpoint:** `/categories`
-   **Method:** `POST`
-   **Description:** Create a new category.
-   **Request Body:**
 ```bash
{
"name":  "susu"
}
```

**Response:**

-   **Status Code:** `201 Created`
-   **Body:**
 ```bash
{
    "data": {
        "name": "susu",
        "_id": "66b6afdd254710def81ad8cd",
        "createdAt": "2024-08-10T00:10:05.436Z",
        "updatedAt": "2024-08-10T00:10:05.436Z",
        "__v": 0
    },
    "message": "Success create product"
}
```

#### 3. **Get Categories by ID**

-   **Endpoint:** `/categories/:id`
-   **Method:** `GET`
-   **Description:** Retrieve details of a specific category by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the .
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
   ```bash
{
    {
    "data": {
        "_id": "66b6afdd254710def81ad8cd",
        "name": "susu",
        "createdAt": "2024-08-10T00:10:05.436Z",
        "updatedAt": "2024-08-10T00:10:05.436Z",
        "__v": 0
    },
    "message": "Success get one product"
}
}
```
#### 4. **Update Categories **

-   **Endpoint:** `/categories/:id`
-   **Method:** `PUT`
-   **Description:** Update an existing category by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the .
-   **Request Body:**
   ```bash
{
"name":  "milk"
}
```
**Response:**

-   **Status Code:** `200 OK`
-   **Body:**
   ```bash
{
    "data": {
        "_id": "66b6afdd254710def81ad8cd",
        "name": "milk",
        "createdAt": "2024-08-10T00:10:05.436Z",
        "updatedAt": "2024-08-10T00:16:12.037Z",
        "__v": 0
    },
    "message": "Success update product"
}
```

#### 5. **Delete Categories **

-   **Endpoint:** `/categories/:id`
-   **Method:** `DELETE`
-   **Description:** Delete a category by ID.
-   **URL Parameters:**
    -   `id` (required): The ID of the .
  
	**Response:**

-   **Status Code:** `200 OK`
-   **Body:**

  ```bash
{
    "data": {
        "_id": "66b6afdd254710def81ad8cd",
        "name": "milk",
        "createdAt": "2024-08-10T00:10:05.436Z",
        "updatedAt": "2024-08-10T00:16:12.037Z",
        "__v": 0
    },
    "message": "Success delete product"
}
```

## Orders

#### 1. **Get All Orders**

-   **Endpoint:** `/orders`
-   **Method:** `GET`
-   **Description:** Retrieve a list of all orders. This endpoint requires authentication.
-   **Request Headers:**
    -   `Authorization: Bearer <your-jwt-token>`
-   **Query Parameters:**

	-   `page` (optional): The page number for pagination (default is `1`).
	-   `limit` (optional): The number of products per page (default is `10`).
-   **Response:**
    -   **Status Code:** `200 OK`
    -   **Body:**
 ```bash
{
    "data": [
        {
            "_id": "66b3fc160fc63eb1ff2ac849",
            "grandTotal": 100000,
            "orderItems": [
                {
                    "name": "wifi coffee",
                    "productId": "66a447259d875f425b18f3b5",
                    "price": 10000,
                    "quantity": 2,
                    "_id": "66b3fc160fc63eb1ff2ac84a"
                },
                {
                    "name": "internet coffee",
                    "productId": "66a458718f3a5aced5c4f931",
                    "price": 10000,
                    "quantity": 1,
                    "_id": "66b3fc160fc63eb1ff2ac84b"
                }
            ],
            "createdBy": "66b231e603564da8881b1e0e",
            "status": "pending",
            "__v": 0
        },
        {
            "_id": "66b4053984da03ee839c8fb0",
            "grandTotal": 100000,
            "orderItems": [
                {
                    "name": "wifi coffee",
                    "productId": "66a447259d875f425b18f3b5",
                    "price": 10000,
                    "quantity": 3,
                    "_id": "66b4053984da03ee839c8fb1"
                },
                {
                    "name": "internet coffee",
                    "productId": "66a458718f3a5aced5c4f931",
                    "price": 10000,
                    "quantity": 2,
                    "_id": "66b4053984da03ee839c8fb2"
                }
            ],
            "createdBy": "66b231e603564da8881b1e0e",
            "status": "pending",
            "__v": 0
        }
    ],
    "message": "Success get all orders",
    "page": 1,
    "limit": 10,
    "total": 2,
    "totalPages": 1
}
```

#### 2. **Create Order**

-   **Endpoint:** `/orders`
-   **Method:** `POST`
-   **Description:** Create a new order. This endpoint requires authentication.
-   **Request Headers:**
    -   `Authorization: Bearer <your-jwt-token>`
-   **Request Body:**
 ```bash
{
"grandTotal":  40000,
"orderItems":  [
{
	"productId":  "66a447259d875f425b18f3b5",
	"name":  "wifi coffee",
	"price":  10000,
	"quantity":  2
},
{
	"productId":  "66a458718f3a5aced5c4f931",
	"name":  "internet coffee",
	"price":  10000,
	"quantity":  2
}
],
"status":  "pending"
}
```

**Response:**

-   **Status Code:** `201 Created`
-   **Body:**
 ```bash
{
    "message": "Order created successfully",
    "order": {
        "grandTotal": 40000,
        "orderItems": [
            {
                "name": "wifi coffee",
                "productId": "66a447259d875f425b18f3b5",
                "price": 10000,
                "quantity": 2,
                "_id": "66b6e0f0b070a6066d6dabfd"
            },
            {
                "name": "internet coffee",
                "productId": "66a458718f3a5aced5c4f931",
                "price": 10000,
                "quantity": 2,
                "_id": "66b6e0f0b070a6066d6dabfe"
            }
        ],
        "createdBy": "66b231e603564da8881b1e0e",
        "status": "pending",
        "_id": "66b6e0f0b070a6066d6dabfc",
        "__v": 0
    }
}
```
## Uploads
#### 1. **Upload Single File**

-   **Endpoint:** `/upload`
-   **Method:** `POST`
-   **Description:** Upload a single file. 
-   **Request Body:**
    -   Form-data with a file field named `file`.
-   **Response:**

-   **Status Code:** `200 OK`
-   **Body:**
```bash
{
    "message": "File uploaded",
    "data": {
        "asset_id": "42c948633d53fa43ea1267301eeaa863",
        "public_id": "a9wxphtrwlrryd0guczr",
        "version": 1723262276,
        "version_id": "8ff92f578eec8f38f0ba363f196ee693",
        "signature": "9a52ca91c05b4fadfe682c0ee76e6a8d422b25c4",
        "width": 1280,
        "height": 720,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2024-08-10T03:57:56Z",
        "tags": [],
        "bytes": 169463,
        "type": "upload",
        "etag": "9e3dd06828a7254c5f916fe6145ecb79",
        "placeholder": false,
        "url": "http://res.cloudinary.com/dmvigke9d/image/upload/v1723262276/a9wxphtrwlrryd0guczr.jpg",
        "secure_url": "https://res.cloudinary.com/dmvigke9d/image/upload/v1723262276/a9wxphtrwlrryd0guczr.jpg",
        "folder": "",
        "api_key": "438744581893554"
    }
}
```

#### 2. **Upload Multiple Files**

-   **Endpoint:** `/uploads`
-   **Method:** `POST`
-   **Description:** Upload multiple files
-   **Request Body:**
    -   Form-data with multiple files under the field name `files`.
-   **Response:**

-   **Status Code:** `200 OK`
-   **Body:**
```bash
{
    "message": "Files uploaded",
    "data": [
        {
            "asset_id": "bfb24f73a61310657f023abf233147d1",
            "public_id": "lddw1hv08cviqysfu98p",
            "version": 1723262748,
            "version_id": "082757d97e7f57086de43800626e1e99",
            "signature": "48ca79f0f92d512aca918a0b5d3c9241ae1dcb53",
            "width": 1280,
            "height": 720,
            "format": "jpg",
            "resource_type": "image",
            "created_at": "2024-08-10T04:05:48Z",
            "tags": [],
            "bytes": 120826,
            "type": "upload",
            "etag": "07d97078c4b5efa423a42227bf4f76ad",
            "placeholder": false,
            "url": "http://res.cloudinary.com/dmvigke9d/image/upload/v1723262748/lddw1hv08cviqysfu98p.jpg",
            "secure_url": "https://res.cloudinary.com/dmvigke9d/image/upload/v1723262748/lddw1hv08cviqysfu98p.jpg",
            "folder": "",
            "api_key": "438744581893554"
        },
        {
            "asset_id": "79db4010411e03edcd6ad64fb69d7944",
            "public_id": "r5mpmxpw9dynqhbgdlva",
            "version": 1723262748,
            "version_id": "082757d97e7f57086de43800626e1e99",
            "signature": "bd3e04e701680d1f332769bea643b5cf229f0b61",
            "width": 1599,
            "height": 899,
            "format": "jpg",
            "resource_type": "image",
            "created_at": "2024-08-10T04:05:48Z",
            "tags": [],
            "bytes": 195958,
            "type": "upload",
            "etag": "f28b6f9a1263ed790affb83736ffcf07",
            "placeholder": false,
            "url": "http://res.cloudinary.com/dmvigke9d/image/upload/v1723262748/r5mpmxpw9dynqhbgdlva.jpg",
            "secure_url": "https://res.cloudinary.com/dmvigke9d/image/upload/v1723262748/r5mpmxpw9dynqhbgdlva.jpg",
            "folder": "",
            "api_key": "438744581893554"
        }
    ]
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