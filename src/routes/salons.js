const Router = require('express');
const { logger } = require('../utils/logger');
const { Salon } = require('../models/salons');
const salons = Router();

salons.post('/', async (req, res) => {
    try {
        console.log('req: ', req);
        const salon = await Salon.create({ ...req.body });
        res.status(201).json({
            message: 'Salon created successfully',
            salon
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating salon',
            error: err
        });
    }
}
);

salons.put('/', async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        const { id, appointments } = req.body;
        const salon = await Salon.updateOne({ id }, { $push: { appointments } });
        res.status(201).json({
            message: 'Salon created successfully',
            salon
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating salon',
            error: err
        });
    }
}
);

salons.get('/', async (req, res) => {
    try {
        const allSalons = await Salon.find();
        if (allSalons.length) {
            res.status(200).json({
                message: 'Salons found',
                allSalons
            });
        } else {
            res.status(404).json({
                message: 'No salons found'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error getting salons',
            error: err
        });
    }
}
);


module.exports = { salons };