import mongoose from 'mongoose'
import dotenv from 'dotenv'

function startDatabase(connectionString) {
  dotenv.config()
  if (!connectionString)
    throw Error(`Connection string is required to start database`)

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  return mongoose
}

export default startDatabase
