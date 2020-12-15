import express from 'express';

// set up router
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to LeanBean.")
})

export default router;