import mongoose from 'mongoose'
import dotenv from 'dotenv'

const { DATABASE } = process.env
dotenv.config()

function startDatabase(DATABASE) {
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
