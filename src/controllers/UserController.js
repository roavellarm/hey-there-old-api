import User from '../models/User'

async function getAllUsers(req, res) {
  try {
    const data = await User.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

// async function addNewContact(req, res) {
//   try {
//     // DADOS NECESSARIOS: email do currentUser[headers: token], email do newContactUser[body]
//     // checar quem é o currentUser
//     // ver se o newContactUser existe
//     // ver se o newContactUser já não está na lista de contatos do currentUser
//     const user = await User.findOne({ email: req.body.email })
//     if (!user) return res.status(400).json({ error: "User doen't exists" })

//     return res.status(200).json({ message: 'Contact added successfuly' })
//   } catch (error) {
//     return res.status(400).json({ error })
//   }
// }

export default { getAllUsers }
