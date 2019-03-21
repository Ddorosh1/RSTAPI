const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', controllers.getAll)
    .get('/api/tasks/:id', controllers.getOne)
    .post('/api/tasks', controllers.createTask)
    .put('/api/tasks/:id', controllers.update)
    .delete('/api/tasks/:id', controllers.delete);
}