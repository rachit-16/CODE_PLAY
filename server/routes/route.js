const multer = require('multer')
const post = require('../app/controllers/post/post')
const auth = require('../app/controllers/auth/auth')
const authMiddleware = require('../app/controllers/middleware/auth')

const upload = multer()

function initroutes(app) {
  app.post('/signup', upload.none(), auth().createuser)
  app.post('/login', upload.none(), auth().login)
  app.post('/logout', authMiddleware, auth().logout)
  app.post('/makepost', authMiddleware, post().makepost)
  app.get('/getpost', authMiddleware, post().getpost)
  app.post('/upvote/:id', authMiddleware, post().upvotee)
  app.post('/downvote/:id', authMiddleware, post().downvotee)
}

module.exports = initroutes
