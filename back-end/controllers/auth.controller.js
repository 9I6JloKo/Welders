import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const signIn = async (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Username and password required!'
        });
    }
    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (!user) {
        return res.status(404).json({
            message: 'Wrong username or password!'
        });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (passwordIsValid) {
        req.session.username = user.username;
        res.json({
            message: 'Login successful!'
        });
    } else {
        return res.status(404).send({
            message: 'Wrong username or password!'
        });
    }
};

export const logout = (req, res) => {
    req.session.destroy();
    res.json({
        message: 'Logout successful!'
    });
};