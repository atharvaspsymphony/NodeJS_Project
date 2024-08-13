const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionService = require('./auth/services/sessionService');
const authRoutes = require('./auth/routes/authRoutes');
const otpRoutes = require('./auth/routes/otpRoutes');
const userRoutes = require('./basic/routes/userRoutes');
const errorHandler = require('./basic/middlewares/errorHandler');

app.use(bodyParser.json());

// Middleware
app.use(express.json());
app.use(sessionService);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);

app.use(errorHandler);
app.use('/basic', userRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
