const mongoose = require("mongoose");
const { Schema } = mongoose;

const larpEventSchema = new Schema({
  id: { type: String },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  time: {
    type: String,
    required: true,
  },

  place: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  gamemaster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  maleplayer: {
    type: [String],
    default: [],
  },
  femaleplayer: {
    type: [String],
    default: [],
  },
  male: {
    type: Number,
  },
  female: {
    type: Number,
  },
  contact: {
    type: String,
  },
  playercontact: {
    type: [String],
    default: [],
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("larpEvent", larpEventSchema);
