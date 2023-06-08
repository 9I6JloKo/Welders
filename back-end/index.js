import session from 'express-session';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import db from './config/database.js';
import { createAdmin, createCities } from './controllers/init.controller.js';
import requestsRoute from './routes/requests.route.js';
import authRoute from './routes/auth.route.js';

// Connect database as the sequelize instance
try {
    await db.authenticate();
    await db.sync({ alter: true });
    console.log('\nDatabase connected!');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Initialize express app
const app = express();
dotenv.config();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.set('trust proxy', 1);
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

// Routes
app.use('/requests', requestsRoute);
app.use('/sign-in', authRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`-- Server listening on port http://localhost:${PORT} --`);
});

createAdmin();
createCities();