import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import City from '../models/city.js';
import cities from '../data/cities.json' assert { type: "json" };

const createAdmin = async () => {
    const user = await User.findOne({
        where: { username: 'admin' }
    });
    if (!user) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash('12345', salt, async (err, hash) => {
                await User.create({
                    username: 'admin',
                    password: hash,
                });
            });
        });
    }
};

const createCities = async () => {
    try {
        await City.bulkCreate(cities);
    } catch (error) {
        return;
    }
};

export { createAdmin, createCities };