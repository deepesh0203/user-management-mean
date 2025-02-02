const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app=express();
app.use(cors());
app.use(bodyParser.json());

let users=[ 
    {id:1,name:"John Doe", email:"john@gmail.com"},
    {id:2,name: "Jane Doe", email:"jane@gmail.com"}
];

app.get("/api/users",(req,res)=>{
    res.json(users);
});

app.get("/api/users/:id", (req,res)=> {
    const user= users.find(u=>u.id==req.params.id);
    user ? res.json(user): res.status(404).json({message:"User Not Found"});
});

app.post("/api/users",(req,res)=>{
    const nu={id:users.length+1, ...req.body};
    users.push(nu);
    res.status(201).json(nu);
    res.json(users)
});

app.put("/api/users/:id",(req,res)=>{
    index=users.findIndex(u=> u.id==req.params.id);
    if (index!==-1){
        users[index]={id:req.params.id,...req.body};
        res.json(users[index]);
    }
    else {
        res.status(404).json({message:"User not found"});
    }
});

app.patch("/api/users/:id",(req,res)=>{
    index=users.findIndex(u=> u.id==req.params.id);
    if (index!==-1){
        users[index]={...users[index],...req.body};
        res.json(users[index]);
    }
    else {
        res.status(404).json({message:"User not found"});
    }
});

app.delete("/api/users/:id",(req,res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.json({message:"User Deleted"});
});

app.listen(3000,()=>console.log("Server running on port 3000"));
