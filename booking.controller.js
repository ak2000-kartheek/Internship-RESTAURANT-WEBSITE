const Booking = require("../models/booking.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    
    const booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        mobile:req.body.mobile,
        time:req.body.time,
        number: req.body.number,
    });

   
    Booking.create(booking, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    Booking.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bookings."
            });
        else res.send(data);
    });
};


exports.findOne = (req, res) => {
    Booking.findById(req.params.bookingId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Booking with id ${req.params.bookingId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Booking with id " + req.params.bookingId
                });
            }
        } else res.send(data);
   });
};
exports.delete = (req, res) => {
  Booking.remove(req.params.bookingId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Booking with id ${req.params.bookingId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Booking with id " + req.params.bookingId
                });
            }
        } else res.send({ message: `Booking was deleted successfully!` });
    });
};


exports.deleteAll = (req, res) => {
    Booking.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Bookings."
            });
        else res.send({ message: `All Bookings were deleted successfully!` });
    });
};