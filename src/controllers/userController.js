import userModel from '../models/userModel'

async function getAll(req, res) {
  try {
    const data = await userModel.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default getAll
