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
      type: String, // Saves new contact email
    },
  ],
  avatar: String,
})

export default model('User', schema)
