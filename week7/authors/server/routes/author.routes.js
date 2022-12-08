const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/createAuthor', AuthorController.createNewAuthor);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteExistingAuthor);
}