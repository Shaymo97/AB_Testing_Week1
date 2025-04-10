const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const User = require('../models/user');

async function register (req, res) {
    const data = req.body;
    console.log("controller registered data unhashed", data)
    //Generate a salt
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS))
    
    // Use salt to hash the plaintext password and assign to data object
    data.password = await bcrypt.hash(data.password, salt)
    console.log("controller registered data hashed", data)

    //Pass data into model
    const result = await User.create(data)

    console.log(data)

    res.status(201).send(result);
};

async function login (req, res) {
    const data = req.body;
    try {
        //Use the username to retrieve all information about the user
        const user = await User.getOneByUsername(data.username)
        const match = await bcrypt.compare(data.password, user.password)

        if(match) {
            console.log("Controller login match found")
            //Create a payload
            const payload = { username: user.username }
            //Define a function that sends a token to the client
            const sendToken = (err, token) => {
                if(err){
                    throw new Error("Error in token generation")
                } else {
                    res.status(200).json({
                    success : true,
                    token: token
                })
            }
            }
            jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: 3600}, sendToken)
        } else {
            throw new Error("User could not be authenticated")
        }


    } catch (error) {
        res.status(401).json({ error: err })
    }
    res.status(200).send(data);
}

module.exports = {
    register, login
}                           