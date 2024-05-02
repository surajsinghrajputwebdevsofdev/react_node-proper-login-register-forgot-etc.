import express from 'express';
import { Createuser, Login } from '../../controller/Register.js';
import { registerValidation } from '../../validations/validationuniqe.js';

const router = express.Router();

router.post("/register", registerValidation(), async (req, res) => {
    try {
        await Createuser(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        await Login(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

export default router;
