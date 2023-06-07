import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';
import City from './city.js';

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
        phone: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' }
    },
    {
        sequelize: db,
        modelName: 'Request',
        tableName: 'requests',
        timestamps: true,
        freezeTableName: true,
    }
);
Request.belongsTo(City, { foreignKey: 'city' });
City.hasMany(Request, { foreignKey: 'city' });

export default Request;