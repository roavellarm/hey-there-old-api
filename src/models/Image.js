/* eslint-disable func-names */
import { model, Schema } from 'mongoose'
import aws from 'aws-sdk'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const s3 = new aws.S3()

const schema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

schema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`
  }
})

schema.pre('remove', function () {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({
        Bucket: 'hey-there-staging',
        Key: this.key,
      })
      .promise()
  }
  return promisify(fs.unlink)(
    path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key)
  )
})

export default model('Image', schema)
