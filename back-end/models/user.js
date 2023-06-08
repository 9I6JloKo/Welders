import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

class User extends Model { }
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
    },
    {
        sequelize: db,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
        freezeTableName: true,
    }
);
export default User;