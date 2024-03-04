import express from "express";
import rateLimit from "express-rate-limit";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authenticateAdmin from "./authenticateAdmin.js";
import nodemailer from "nodemailer";
import authenticateToken from "./authenticateToken.js";
import { check, validationResult } from "express-validator";
const router = express.Router();

//rate limiting login and  registering
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // limit each IP to 10 requests per windowMs
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sidducricket45@gmail.com",
        pass: "dwgy qwgu csuh cfxp",
    },
    tls: {
        rejectUnauthorized: false,
    },
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking if the user has entered the email and password
        if (!email || !password) {
            return res.status(400).json("Enter your email and password");
        }

        // Checking if the user exists in the database
        const existingUser = await userModel.findOne({ email }).lean();
        if (!existingUser) {
            return res
                .status(400)
                .json("User does not exist, please register!");
        }

        // Checking if the password is correct
        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!passwordCorrect) {
            return res
                .status(400)
                .json("Wrong password or email, please try again!");
        }

        // Checking if the email is verified
        if (!existingUser.isVerified) {
            return res
                .status(400)
                .json(
                    "Email is not verified.Register to get verification email"
                );
        }

        // Removing the password from the user object
        delete existingUser.password;

        // Generate a unique value (e.g., timestamp or random string)
        const uniqueValue = Date.now().toString(); // Example: Using timestamp

        // Create token with unique payload and updated expiration time
        const token = jwt.sign(
            {
                id: existingUser._id,
                email: existingUser.email,
                unique: uniqueValue,
            },
            process.env.JWT_SECRET
        );

        // Return the new token, user, and success message
        return res.status(200).json({
            message: "User logged in successfully",
            user: existingUser,
            token,
        });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//registerwithverifciation
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking if the user has entered the email and password
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Enter your email and password" });
        }

        // Checking if the user already exists in the db
        let user = await userModel.findOne({ email }).lean();

        if (user) {
            // If the user exists and is already verified, return an error
            if (user.isVerified) {
                return res.status(400).json({
                    message:
                        "User already exists and is verified. Please login!",
                });
            }

            // Generate a new verification token
            const verificationToken = jwt.sign(
                { email },
                process.env.JWT_SECRET,
                {}
            );

            const verificationLink = `${verificationToken}`; // Replace with your verification link URL
            const url = `http://localhost:3000/verifyEmail/${verificationLink}`;
            const mailOptions = {
                from: "sidducricket45@gmail.com",
                to: user.email,
                subject: "Account Verification",
                text: `Please verify your email by clicking the link below:\n\n${verificationLink}`,
                html: `<p>Please verify your email by clicking the link below:</p>
                 <a href="${url}">Please click Me!</a>
                `,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });

            return res.status(200).json({
                message:
                    "User already exists.Please check your email for verification.",
                token: verificationToken,
            });
        }

        // If the user does not exist, create a new user
        const salt = await bcrypt.genSalt(12);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            email,
            password: hashedpassword,
            isVerified: false, // Set initial verification status as false
        });

        user = await newUser.save();

        // Generate a verification token
        const verificationToken = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            {}
        );

        const verificationLink = `${verificationToken}`; // Replace with your verification link URL
        const url = `http://localhost:3000/verifyEmail/${verificationLink}`;
        const mailOptions = {
            from: "sidducricket45@gmail.com",
            to: user.email,
            subject: "Account Verification",
            text: `Please verify your email by clicking the link below:\n\n${verificationLink}`,
            html: `<p>Please verify your email by clicking the link below:</p>
             <a href="${url}">Please click Me!</a>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        return res.status(200).json({
            message:
                "User created successfully. Please check your email for verification.",
            token: verificationToken,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

//get user after verifying the token
router.get("/user", authenticateAdmin, async (req, res) => {
    try {
        const user = await userModel
            .findById(req.user.id)
            .select({ password: 0 });
        res.json({ user });
    } catch (error) {
        console.error("Database query error:", error);
        res.status(400).json({ message: "There was an error", error });
    }
});

router.get("/verify/:token", async (req, res) => {
    try {
        const { token } = req.params;

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Extract the email from the decoded token
        const { email } = decodedToken;

        // Find the user with the provided email
        const user = await userModel.findOne({ email });

        // If the user does not exist or is already verified, return an error
        if (!user || user.isVerified) {
            return res
                .status(400)
                .json({ message: "Invalid verification link" });
        }

        // Update the isVerified field of the user
        user.isVerified = true;
        await user.save();

        return res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        return res.status(400).json({ message: "There was an error", error });
    }
});

//Logout
router.post("/logout", (req, res) => {
    res.clearCookie("jwt"); // clear the jwt cookie
    res.json({ message: "User logged out successfully" });
});

export default router;
