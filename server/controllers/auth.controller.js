import bcrypt from 'bcrypt'
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';


export const register = async (req, res) => {

    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                status: false,
                error: "Password don't match"
            })
        }

        const isEmailExist = await User.findOne({ email })

        if (isEmailExist) {
            return res.status(400).json({
                status: false,
                error: "email already exists"
            });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        })

        if (newUser) {

            const token = generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            res.status(201).json({
                status: true,
                token,
                _id: newUser._id,
                name: newUser.name,
            })

        } else {
            res.status(400).json({
                status: false,
                error: "Invalid user data"
            })
        }

    } catch (error) {
        console.log("Error in register controller", error.message);
        res.status(500).json({
            status: false,
            error: "Internal Server Error"
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: false,
                error: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        const token = generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            msg: "Login success",
            token,
            _id: user._id,
            name: user.name,
        });

    } catch (error) {
        console.error("Error in login controller", error.message);
        res.status(500).json({
            status: false,
            error: "Internal Server Error"
        });
    }
};






export const logOut = async (req, res) => {

}