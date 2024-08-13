crud-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── middlewares/
│   └── errorHandler.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
└── .env




Client (POST /users) 
      |
      v
Router (userRoutes.js)
      |
      v
Controller (addUser in userController.js)
      |
      v
Model (createUser in userModel.js)
      |
      v
Database (PostgreSQL - INSERT)
      |
      v
Model (Result returned)
      |
      v
Controller (Response prepared)
      |
      v
Client (Response received)




### Auth Service

crud-api/
│
├── auth/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── otpController.js
│   │
│   ├── models/
│   │   ├── authModel.js
│   │   └── otpModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── otpRoutes.js
│   │
│   ├── services/
│   │   ├── jwtService.js
│   │   ├── otpService.js
│   │   └── sessionService.js
│   │
│   └── middlewares/
│       ├── authMiddleware.js
│       └── otpMiddleware.js
│
├── config/
│   └── db.js
│
├── app.js
├── package.json
└── .env
