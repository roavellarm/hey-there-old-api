import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { DATABASE } = process.env

function startDatabase() {
  if (!DATABASE) throw Error(`Connection string is required to start database`)

  mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  return mongoose
}

export default startDatabase
