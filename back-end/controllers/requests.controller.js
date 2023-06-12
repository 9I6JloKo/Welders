import Request from '../models/request.js';
import City from '../models/city.js';

const createRequest = async (req, res) => {
    if (!req.body.name || !req.body.surname || !req.body.personalCode
        || !req.body.birthDate || !req.body.course
        || !req.body.city || !req.body.email) {
        return res.status(400).json({
            message: 'All fields are required!'
        });
    }
    const city = await City.findOne({
        where: { name: req.body.city }
    });
    try {
        const request = await Request.create({
            name: req.body.name,
            surname: req.body.surname,
            personalCode: req.body.personalCode,
            birthDate: req.body.birthDate,
            course: req.body.course,
            city: city.id,
            email: req.body.email,
            phone: req.body.phone,
            description: req.body.description,
        });
        res.json(request);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while creating the request.'
        });
    }
};

const getRequests = async (req, res) => {
    try {
        const requests = await Request.findAll({
            include: [{ model: City, attributes: ['name'] }]
        });
        res.json(requests);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while retrieving requests.'
        });
    }
};

const getRequest = async (req, res) => {
    try {
        const request = await Request.findByPk(req.params.id, {
            include: [{ model: City, attributes: ['name'] }]
        });
        res.json(request);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while retrieving request.'
        });
    }
};

const changeReuqestStatus = async (req, res) => {
    try {
        const request = await Request.findByPk(req.params.id);
        if (!request) {
            return res.status(404).json({
                message: 'Request not found!'
            });
        }
        await Request.update({ status: req.body.status }, { where: { id: req.params.id } })
        res.json(request);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while updating request.'
        });
    }
};

export { createRequest, getRequests, getRequest, changeReuqestStatus };