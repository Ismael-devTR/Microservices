# Microservices Project

## Overview

This project is a microservices-based architecture using Node.js, Express.js, and MongoDB. The services included are:

- **Books Service**: Manages books inventory.
- **Orders Service**: Handles orders and transactions.
- **Customers Service**: Manages customer information.

Each service is developed as an independent Express.js application with its own MongoDB database. The services communicate with each other via REST APIs.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- Docker (optional, for containerized deployment)

## Setting Up Each Service

### Common Setup Steps

1. **Clone the repository**:
    ```
    git clone https://github.com/Ismael-devTR/Microservices.git
    cd microservices-project
    ```

2. **Navigate to the service directory**:
    ```
    cd books-service   # or orders-service, customers-service
    ```

3. **Install dependencies**:
    ```
    npm install
    ```

4. **Configure environment variables**:
    - Copy `.env.example` to `.env` and update the variables accordingly.

5. **Run the service**:
    ```
    npm start
    ```

### Books Service

**Directory**: `books-service`

#### API Endpoints

- `GET /books`: List all books
- `GET /books/:id`: Get details of a book by ID
- `POST /books`: Add a new book
- `PUT /books/:id`: Update book information
- `DELETE /books/:id`: Delete a book

### Orders Service

**Directory**: `orders-service`

#### API Endpoints

- `GET /orders`: List all orders
- `GET /orders/:id`: Get details of an order by ID
- `POST /orders`: Create a new order
- `PUT /orders/:id`: Update order information
- `DELETE /orders/:id`: Cancel an order

### Customers Service

**Directory**: `customers-service`

#### API Endpoints

- `GET /customers`: List all customers
- `GET /customers/:id`: Get details of a customer by ID
- `POST /customers`: Add a new customer
- `PUT /customers/:id`: Update customer information
- `DELETE /customers/:id`: Delete a customer

## Inter-Service Communication

Services communicate with each other using HTTP requests. Ensure each service's base URL is correctly configured in the environment variables.

## Environment Variables

Each service requires the following environment variables:

- `PORT`: The port on which the service will run.
- `MONGODB_URI`: The MongoDB connection string.

## Example `.env` File

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/books-db
```

## Contribution

Feel free to open issues or submit pull requests if you find any bugs or want to contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or questions, please contact [dev.tristan.romero@gmail.com](dev.tristan.romero@gmial.com).

---

Happy Coding! 🚀
