import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [
    {
      type: String, // User email
    },
  ],
  chatList: [{ type: String }],
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default model('User', schema)
