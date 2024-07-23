import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 




const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.redirect("/login");
    } catch (error) {
        res.status(400
        ).send(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        let same = false;
        if (user) {
            same = await bcrypt.compare(password, user.password);
            console.log(same);
        }else{
            return res.status(401).json({
                succeded: false,
                message: "Invalid credentials"
            });
        }
        if (same) {
            const token = createToken(user._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });

            res.redirect("/users/dashboard");
            
        } else {
            res.status(400).send("Invalid credentials");
        }
    } 

    

    catch (error) {
        res.status
        (500).send(error);
    }
}

const createToken=(userId) => {
    return jwt.sign({
        userId
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
}

const getDashboardPage = (req, res) => {
    res.render('dashboard',{
        link:"dashboard"
    
    });
}


export { createUser, loginUser, getDashboardPage };