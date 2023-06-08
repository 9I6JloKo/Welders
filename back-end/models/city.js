import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

class City extends Model { }
City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING },
    },
    {
        sequelize: db,
        modelName: 'City',
        tableName: 'cities',
        timestamps: true,
        freezeTableName: true,
    }
);
export default City;