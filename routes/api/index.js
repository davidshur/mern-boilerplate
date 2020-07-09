const router = require('express').Router();
const router = require('mongoose').Router;
const modelRoutes = require('./models');

router.use('/models', modelRoutes);

module.exports = router;
