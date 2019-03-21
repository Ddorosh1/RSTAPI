const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RST', {useNewUrlParser:true});

const TaskSchema = new mongoose.Schema({
    title: {
      type: String,
      require: [true, 'title is required numb nuts']
    },
    description: {
      type: String,
      required: [true, 'say my name!']
    },
    completed: {
      type: Boolean,
      default: false
    },
  }, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);