const Post = require('../../models/post')
function post() {
  return {
    async upvotee(req, res) {
      const postId = req.params.id

      const post = await Post.findById(postId)
      post.upvote = post.upvote + 1
      post.totalvotes = post.totalvotes + 1

      post.save()
      console.log(post)
      res.json(post)
    },
    async downvotee(req, res) {
      const postId = req.params.id

      const post = await Post.findById(postId)
      post.downvote = post.downvote + 1
      post.totalvotes = post.totalvotes + 1

      post.save()
      console.log(post)
      res.json(post)
    },
    makepost(req, res) {
      const { title, body } = req.body
      const newpost = new Post({
        title: title,
        body: body,
        writtenBy: req.user.name
      })
      newpost.save()

      res.json(newpost)
    },
    async getposts(req, res) {
      const allpost = await Post.find({})
      res.json(allpost)
    }
  }
}
module.exports = post
