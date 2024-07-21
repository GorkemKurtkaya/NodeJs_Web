import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
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
            res.status(200).send("Login successful");
        } else {
            res.status(400).send("Invalid credentials");
        }
    } 

    

    catch (error) {
        res.status
        (500).send(error);
    }
}


export { createUser, loginUser };