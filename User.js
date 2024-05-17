const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      max: 75,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      min: 6,
    },
    UserName: {
      type: String,
      default: '',
    },
    CoverImage: {
      type: String,
      default: '',
    },
    Biography: {
      type: String,
      default: '',
    },
    UserID : {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
