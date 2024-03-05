const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/generate-token', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    const payload = {
        user: {
            username: username,
        }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({ token });
});

router.get('/validate-token', (req, res) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, decoded });
    } catch (error) {
        res.status(401).json({ valid: false, error: error.message });
    }
});

module.exports = router;