const passport = require('passport')

module.exports = function (req, res, next) {
    passport.authenticate('user', 'jwt', function(err, user) {
        if (err || !user) {
            res.status(403).send({
                error: 'you do not have access yo this resource'
            })
        } else {
            req.user = user
            next()
        }
    }) (req, res, next)
}