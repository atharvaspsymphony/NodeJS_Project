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
