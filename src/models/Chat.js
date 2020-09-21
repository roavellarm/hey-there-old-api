import { model, Schema } from 'mongoose'

const schema = new Schema({
  chatId: {
    // HASH gerado pelo front (conversa direta)
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  groupTitle: { type: String },
  users: [{ type: String }], // Users emails
  messages: [
    {
      message: {
        messageId: {
          type: String,
          unique: true,
          required: true,
          index: true,
        },
        author: {
          type: String, // User email
          trim: true,
        },
        content: {
          type: String,
        },
        unReaded: {
          type: Boolean,
          default: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default model('Chat', schema)
