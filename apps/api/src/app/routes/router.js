const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');


// register user

router.post('/register', async (req,res)=>{
    console.log(req.body);
    const {firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address} = req.body;

    if(!firstName || !lastName || !email || !dob || !nhsNumber || !drPlusIdNo || !gender || !address){
        req.status(422).json("Please fill the data!");
    }

    try{
        const preUser = await users.findOne({email}); //email:email
        console.log(preUser)

        if(preUser){
            res.status(422).json("This user is already present!");
            console.log("This user is already present!");
        } else {
            const addUser = new users({firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address});
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
    } catch (error) {
            res.status(422).json(error)
    }

})


// get user data

router.get('/getdata', async (req,res)=>{
    try{
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch (error) {
        res.status(422).json(error);
    }
})


// get individual data

router.get('/getuser/:id', async (req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;

        const userIndividual = await users.findById({_id:id});
        console.log(userIndividual);
        res.status(201).json(userIndividual)

    } catch (error) {
        console.log(error)
        res.status(422).json(error);
    }
})

module.exports = router;