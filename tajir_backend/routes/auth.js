const express = require('express');
const router = express.Router();
const addUser = require("../models/modelUser")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const fetchUsers = require('../middleware/authenticateUser');



const Jwt_Secret_Key = "KeyBytajirSty@le";



router.post('/signup', async (req, res) => {
    try {
        const user1 = await addUser.findOne({ email: req.body.email });
        if (user1) {
            return res.status(500).json('Email Already Exist!');
        }else{
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.password, salt)
            const candidateData = new addUser({
                username: req.body.username,
                email: req.body.email,
                password: securePass
            });
            
            await candidateData.save();
            const getData = {
                user: {
                    id: candidateData._id
                }
            }
            const auth_token = jwt.sign(getData, Jwt_Secret_Key);
            res.status(200).json({token:auth_token});
            
        }

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error' );
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user1 = await addUser.findOne({ email});
        if (!user1) {
            return res.status(500).json("Incorrect logins");
        }

        const cmpPass = await bcrypt.compare(password, user1.password);
        if (!cmpPass) {
            return res.json("Incorrect logins");
        }
        const getData = {
            user: {
                id: user1.id
            }
        }
        const auth_token = jwt.sign(getData, Jwt_Secret_Key);
        res.status(200).json({token:auth_token});

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error' );
    }
});



// to get customer through jwt token coming from body of react checkout
router.post("/getUser",async (req, res) => {
    try {
        const data = jwt.verify(req.body.token, Jwt_Secret_Key);
        const id = data.user.id;
        const user = await addUser.findById(id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
