const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    PostID: {
      type: String,
      required: true,
    },
    UserID : {
      type: String,
      max: 500,
      default: '',
    },
    Content: {
      type: String,
      default: '',
    },
    Image: {
      type: String,
      default: '',
    },
    CreatedAt : {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
