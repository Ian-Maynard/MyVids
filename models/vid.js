var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VidSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  },
    note: {
    type: String
  }
});

var Vid = mongoose.model("Vid", VidSchema);
module.exports = Vid;