const User = require('../../models/user')

function user() {
  return {
    async getUser(req, res) {
      try {
        const token = req.params.token
        const decoded = jwt.verify(token, 'CODEPLAY')
        const user = await User.findOne({
          _id: decoded._id,
          'tokens.token': token
        })
        if (!user) {
          throw new Error()
        }
        res.json({ user: user.email })
      } catch (e) {
        res.status(401).send({ error: 'Please Authenticate' })
      }
    }
  }
}

module.exports = user
