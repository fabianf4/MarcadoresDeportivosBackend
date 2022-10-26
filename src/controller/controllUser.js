const modelUser = require("../models/modelUser")
const bcryptjs = require("bcryptjs")
const { v4: uuidv4 } = require("uuid")
const jwt = require("jsonwebtoken")
const fs = require("fs")

const SALT = parseInt(process.env.SALT)
const SECRET = process.env.SECRET

const errors = {
  defaultError: (res, msg) => {
    return res.status(200).json({
      result: false,
      msg
    })
  },
  loginError: (res) => {
    return res.status(200).json({
      result: true,
      login: false
    })
  }
}

module.exports = {
  createUser: async (req, res) => {
    req.body.uuid = uuidv4()

    try {
      req.body.password = await bcryptjs.hash(req.body.password, SALT)
      req.body.image = `${req.body.uuid}.${req.file.originalname}`

      const user = new modelUser(req.body)
      await user.save()

      fs.rename(`./src/public/${req.file.filename}`,`./src/public/${req.body.image}`, () => {
        console.log("rename")
      })

      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  login: async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
      const user = await modelUser.findOne({ email })

      if (!user) return errors.loginError(res)

      bcryptjs.compare(password, user.password, (err, result) => {
        if (err) console.log(err)

        if (!result) return errors.loginError(res)

        jwt.sign(
          {
            uuid: user.uuid
          },
          SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) console.log(err)
            return res.status(200).json({
              result: true,
              login: true,
              token
            })
          }
        )
      })
    } catch (error) {
      return errors.defaultError(res, error)
    }
  },
  updateUser: async (req, res) => {
    const uuid = req.body.uuid

    if (req.body.password) {
      req.body.password = await bcryptjs.hash(req.body.password, SALT)
    }

    try {
      const user = await modelUser.findOneAndUpdate({ uuid }, req.body)
      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  deleteUserByUuid: async (req, res) => {
    try {

      const uuid = req.body.uuid
      const user = await modelUser.findOneAndDelete({ uuid })

      fs.unlink(`./src/public/${user.image}`, () => {
        console.log("delete")
      })

      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(200).json({
        result: false,
        error
      })
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await modelUser.find()
      res.status(200).json({
        result: true,
        users
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  }
}
