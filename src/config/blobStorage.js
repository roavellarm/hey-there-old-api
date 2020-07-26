import multer from 'multer'
import crypto from 'crypto'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err)
        file.key = `${hash.toString('hex')}-${file.originalname}`
        callback(null, file.key)
      })
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'hey-there-staging',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err)
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        callback(null, fileName)
      })
    },
  }),
}

const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true)
    } else {
      callback(new Error('Invalid file type.'))
    }
  },
}

const imageUploader = () => {
  return multer(multerConfig).single('file')
}

export default imageUploader
