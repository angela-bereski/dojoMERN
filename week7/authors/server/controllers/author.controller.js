const Author = require('../models/author.model');

module.exports = {
    createNewAuthor:(req,res)=> {
        const {name} = req.body;
        Author.create({
            name: name
        })
            .then((newAuthor)=> {
                res.json({author: newAuthor})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },

    findAllAuthors:(req,res)=> {
        Author.find()
            .then((allAuthors)=> {
                res.json({authors: allAuthors})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },
    findOneAuthor:(req,res) => {
        Author.findById({_id: req.params.id})
            .then((oneAuthor)=> {
                res.json({author: oneAuthor})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },

    updateExistingAuthor:(req, res)=> {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators: true}
        )
            .then(updatedAuthor=> {
                res.json({author: updatedAuthor})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    deleteExistingAuthor:(req,res)=> {
        Author.deleteOne({_id: req.params.id})
            .then(result=> {
                res.json({result: result})
            })
            .catch((err)=> {
                res.json({message: 'Something went wrong.', error: err})
            })
    }

}
