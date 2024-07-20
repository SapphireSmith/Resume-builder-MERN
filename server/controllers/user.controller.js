import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js'; // Adjust the import path based on your project structure

export const getProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // "Bearer token"

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            // Verify the token and extract user ID
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.userId;

            if (!userId) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // Find the user by ID and select only the name and email fields
            const user = await User.findById(userId).select('name email');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Return the user data (name and email only)
            res.status(200).json(user);
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token has expired' });
            }
            // Handle other JWT errors
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


export const updatePassword = async (req, res) => {
    try {
        // 1. Validate JWT Token
        const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // 2. Retrieve user from the database
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 3. Validate passwords
        const { newPassword, confirmPassword } = req.body;
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // 4. Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // 5. Update the password
        user.password = hashedPassword;
        await user.save();

        // 6. Send success response
        res.status(200).json({ message: 'Password updated successfully' });

    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const accountDelete = async (req, res) => {
    try {
        // Verify the token
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Extract user ID from token
        const userId = decoded.id;

        // Verify that the text input is 'Delete'
        if (req.body.confirmationText !== 'Delete') {
            return res.status(400).json({ message: 'Confirmation text does not match' });
        }

        // Delete the user from the database
        await User.findByIdAndDelete(userId);

        // Send success response
        res.status(200).json({ message: 'Account successfully deleted' });
    } catch (error) {
        // Handle errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }
        console.error('Error deleting account:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
