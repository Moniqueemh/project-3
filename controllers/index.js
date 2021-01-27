const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const schoolRoutes = require('./schoolController');
const studentRoutes = require('./studentController');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api', schoolRoutes);

router.use('/api/student', studentRoutes);

// Export the router
module.exports = router;
