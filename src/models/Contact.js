import { model, Schema } from 'mongoose'

const schema = new Schema({
  owner: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  contacts: {
    type: Array,
    required: true,
  },
})

export default model('Contacts', schema)
