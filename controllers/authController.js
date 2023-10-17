const Usermodel = require('../Models/UserModel')

exports.createAndUpdateUser = async(req, res) =>{
    const tana = 'Hey guys controller !!!'
    console.log(tana);
    // const obj = {
    //     name: "funo",
    //     location: [103.43,323]
    // }
    // console.log(req.user)
    // res.json(tana)
    const { name , email } = req.user
    // console.log(name, email)
    const user = await Usermodel.findOneAndUpdate(
        {email},
        {name},
        {new: true}
    )
    console.log(user)
    if(user){
        console.log('User update',user)
        res.json(user)
    }else{
        const newUser = await Usermodel({
            email, 
            name
        }).save();
        console.log('CREATE USER', newUser)
        res.json(newUser)
    }
}

exports.currentUser = async(req, res) =>{
    try {
        // code
        const user = await Usermodel.findOne({email: req.user.email }).exec()
        res.send(user)
    } catch (error) {
        console.log(err)
        res.status(400).send('Server Error')
        
    }
}