const mongoose = require("mongoose");

const SalonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    appointments:
        [
            {
                date: {
                    type: Date,
                    default: Date.now,
                }
            }
        ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

const Salon = mongoose.model("salons", SalonSchema);

module.exports = { Salon };