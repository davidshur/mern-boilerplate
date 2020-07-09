const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Model = mongoose.model('models', ModelSchema);
