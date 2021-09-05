const {Comment} = require('../models')
const comment = require('../models/comment')

module.exports = {
    //get all Commment
    async index (req, res) {
        try {
            const comments = await Comment.findAll()
            res.send(comments)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },
    //create comment
    async create (req, res) {
        try {
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create comment incorrect'
            })
        }
    },
    // edit comment, suspend, active
    async put (req, res) {
        try {
            await Comment.update(req.body,{
                where: {
                    id: req.params.commentId
                }
            }
                )
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },
    //delete comment
    async remove (req, res) {
        try {
            const  comment = await comment.findOne({
                where: {
                    id: req.params.commentId
                }
            })
            if(!comment) {
                return res.status(403).send({
                    error: 'The comment information was incorrect'
            })
        }
            await comment.destroy()
            res.send(blog)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },
    //get comment by id
    async show (req, res) {
        try {
            const comment = await Comment.findByPk(req.params.commentId)
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    }
}