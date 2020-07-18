import { model, Schema } from 'mongoose'

const schema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  contactsEmails: [
    {
      type: String,
      required: true,
    },
  ],
})

export default model('Contact', schema)
