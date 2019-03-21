const Task = require('./models');

module.exports = {

  getAll: (req, res) => {
    Task.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Task.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  create: (req, res) => {
    const { title, description } = req.body;
    new Task({
      title: title,
      description: description,
      completed: false
    })
      .save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  update: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Task.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true}) 
      .then(data => res.json(data)) 
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
}
