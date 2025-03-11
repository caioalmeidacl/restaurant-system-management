# Restaurant System Management

A backend application for managing restaurant operations, including handling orders, menu items, tables, users, and more. This project follows the **Service Layer Pattern** to keep the business logic separated and modular, promoting maintainability and scalability.

## Features

### 1. Accounts and Tables Management:
- **Employees:**
  - Add items to accounts (meal boxes, beverages, self-service weight, barbecue).
  - Associate the account with a specific table or customer.
  - View customers' open accounts.
- **Cashier:**
  - Retrieve and close accounts.
  - Print detailed receipts.

### 2. Owner's Dashboard:
- View active accounts (tables and consumed items).
- Sales reports by category (self-service, beverages, meal boxes, barbecue).
- Control of occupied and available tables.

### 3. Product Management:
- Register new products (e.g., dishes, beverages, meat types).
- Update prices and configurations.
- Inventory control and real-time monitoring.

### 4. Integration with Physical Devices:
- Fiscal printers for automatic receipt issuance.
- API for self-service scales, allowing automated weight registration of dishes.

### 5. Service Flow:
1. The customer arrives and chooses their items.
2. Employees register the consumed items in the customer's account.
3. The cashier accesses open accounts, processes payment, and closes the account.
4. Data is reflected in real-time on the owner's dashboard.

## Project Structure

This project follows the **Service Layer Pattern** to separate concerns and modularize business logic. Here's an overview of the folder structure:

```plaintext
src/
├── controllers/        # HTTP request handlers
│   ├── restaurantController.ts
│   ├── orderController.ts
│   ├── dashboardController.ts
│   ├── productController.ts
│   └── reportController.ts
├── models/             # Database models (schemas)
│   ├── restaurant.ts
│   ├── order.ts
│   ├── product.ts
│   ├── table.ts
│   └── user.ts
├── routes/             # Express routes (API endpoints)
│   ├── restaurantRoutes.ts
│   ├── orderRoutes.ts
│   ├── dashboardRoutes.ts
│   ├── productRoutes.ts
│   └── reportRoutes.ts
├── services/           # Business logic layer
│   ├── restaurantService.ts
│   ├── orderService.ts
│   ├── dashboardService.ts
│   ├── productService.ts
│   └── reportService.ts
├── repositories/       # Database access layer (optional)
│   ├── restaurantRepository.ts
│   ├── orderRepository.ts
│   ├── productRepository.ts
│   ├── tableRepository.ts
│   └── userRepository.ts
├── middleware/         # Middlewares (auth, error handling)
│   ├── authMiddleware.ts
│   └── errorMiddleware.ts
├── utils/              # Utility functions
│   ├── logger.ts
│   ├── validation.ts
│   └── printerUtils.ts
└── server.ts           # Entry point for the application (Express app setup)
```

## Objective
The goal is to develop a restaurant management system that is robust, intuitive, and enhances daily operations. The system should provide a seamless experience for employees and owners, optimizing order processing, billing, and sales tracking in real-time. If you have experience with similar systems, your contributions are welcome!

