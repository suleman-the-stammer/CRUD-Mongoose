const express = require('express');
const userModel = require('./usermodel')
const app = express();

app.get('/', function(req, res){

    res.send("hey")
})
app.get('/create' , async (req, res)=>{
    let new_user = await userModel.create({
        username: "hey",
        name: "Suleman",
        age: 21,
        email: "sulemansyed786@gmail.com"
    })
    res.send(new_user)
})
app.get('/update' , async function(req, res) {
    let updated_user = await userModel.findOneAndUpdate({username: "Stam"} , {name:"Stammer" , age: 30} , {new: true})
    res.send(updated_user);
})

app.get('/read' , async (req, res)=>{
    let users = await userModel.find();
    res.send(users)
})
app.get('/delete' , async (req, res)=>{
    let users = await userModel.findOneAndDelete({username:"hey"})
    res.send(users);

})

app.listen(3000);