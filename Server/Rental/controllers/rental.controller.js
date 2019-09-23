const RentalModel = require('../models/rental.model');


exports.insert = (req, res) => {
    RentalModel.createRental(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    RentalModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};


exports.getById = (req, res) => {
    RentalModel.findById(req.params.rentalId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.patchById = (req, res) => {
    RentalModel.patchRental(req.params.rentalId, req.body)
        .then((result) => {
            res.status(204).send({});
        });
};

exports.removeById = (req, res) => {
    RentalModel.removeById(req.params.rentalId)
        .then((result)=>{
            res.status(204).send({});
        });
};

