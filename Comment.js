const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    UserID : {
      type: String,
      required: true,
    },
    PostID: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      default: '',
    },
    CreatedAt: {
      type: String,
      default: '',
      required: true,
    },
    CommentID : {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
