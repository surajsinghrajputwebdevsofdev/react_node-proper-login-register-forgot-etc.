import registerModel from "../models/Register.js";
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import { jwtSecret } from "../config.js";

export const Createuser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const productData = await registerModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            dob: req.body.dob,
            confirmpassword: req.body.confirmpassword,
        });
        if (productData) {
            const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: '1h' });
            res.status(200).send({ message: "User created successfully :)", token });
        } else {
            res.status(404).send({ message: "Unable to create user. Please try again later." });
        }
    } catch (e) {
        res.status(500).send({ error: e?.message });
    }
};

export const Login = async (req, res) => {
    try {
        let user = await registerModel.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (user) {
            const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: '1h' });
            res.status(200).send({message: "User login successfully :)", id: user._id, email: user.email, token });
        } else {
            res.status(404).send({ message: "Wrong username or password." });
        }
    } catch (e) {
        res.status(500).send({ error: e?.message });
    }
}

export const Changepass = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;
        let user = await registerModel.findOne({ email, password });

        if (!user) {
            return res.status(404).send({ message: "User not found or wrong password." });
        }
        const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: '1h' });
        user.password = newPassword;
        await user.save();
        res.status(200).send({message: "Password changed successfully.)", password: user.password, token });
    } catch (e) {
        res.status(500).send({ error: e?.message });
    }
};

export const Forgotpassword = async (req, res) => {
    try {
        const { email, newPassword, confirmpassword } = req.body;
        let user = await registerModel.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: "User not found please register first" });
        }
        const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: '1h' });
        user.password = newPassword,confirmpassword;
        
        await user.save();
        res.status(200).send({message: "Password changed successfully.)", password: user.password, token });
    } catch (e) {
        res.status(500).send({ error: e?.message });
    }
};
