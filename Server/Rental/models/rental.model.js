const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/rest-tutorial', { useNewUrlParser: true });
const Schema = mongoose.Schema;


const rentalShema = new Schema({
  title: {type: String, required: true},
  city: {type: String, lowercase: true, required: true},
  street: {type: String, required: true},
  category: {type: String, lowercase: true},
  image: {type: String, required: true},
  bedrooms: Number,
  description: {type: String, required: true},
  dailyRate: Number,
  shared: Boolean,
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

const Rental = mongoose.model("Rental", rentalShema);

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Rental.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.createRental = (rentalData) => {
    const rental = new Rental(rentalData);
    return rental.save();
};

exports.findById = (id) => {
    return Rental.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};


exports.patchRental = (id, RentalData) => {
    return new Promise((resolve, reject) => {
        Rental.findById(id, function (err, Rental) {
            if (err) reject(err);
            for (let i in RentalData) {
                Rental[i] = RentalData[i];
            }
            Rental.save(function (err, updatedRental) {
                if (err) return reject(err);
                resolve(updatedRental);
            });
        });
    })

};

exports.removeById = (RentalId) => {
    return new Promise((resolve, reject) => {
        Rental.remove({_id: RentalId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

