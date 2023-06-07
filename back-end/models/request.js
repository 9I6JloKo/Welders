import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

class Request extends Model { }
Request.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING },
        surname: { type: DataTypes.STRING },
        personalCode: { type: DataTypes.STRING, unique: true },
        birthDate: { type: DataTypes.DATEONLY },
        course: { type: DataTypes.ENUM('semi-automatic', 'welding-metal)') },
        city: { type: DataTypes.INTEGER },
        email: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
    },
    {
        sequelize: db,
        modelName: 'Request',
        tableName: 'requests',
        timestamps: true,
        freezeTableName: true,
    }
);
export default Request;