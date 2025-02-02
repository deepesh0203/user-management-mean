const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/users-db",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log("MongoDB Connection Error",err));
const userSchema = new mongoose.Schema({
    id:Number,
    name: String,
    email: String
  });
const User=mongoose.model("User",userSchema);

app.get("/api/users",async (req,res)=>{
    const users= await User.find();
    res.json(users);
});

app.get("/api/users/:id",async (req,res)=>{
    try{
    const user= await User.findById(req.params.id);
    user ? res.json(user): res.status(404).json({message:"User Not Found"});
    }
    catch{
        res.status(500).json({message:"Invalid User ID"});
    }
});

app.post("/api/users",async (req,res)=>{
    const nu=new User(req.body);
    await nu.save();
    res.status(201).json(nu);
});

app.put("/api/users/:id",async (req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        updatedUser
          ? res.json(updatedUser)
          : res.status(404).json({ message: "User Not Found" });
      } catch (error) {
        res.status(500).json({ message: "Invalid User ID" });
      }
    });

app.patch("/api/users/:id",async (req,res)=>{
        try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        updatedUser
          ? res.json(updatedUser)
          : res.status(404).json({ message: "User Not Found" });
      } catch (error) {
        res.status(500).json({ message: "Invalid User ID" });
      }
    });


app.delete("/api/users/:id", async (req, res) => {
        try {
          const deletedUser = await User.findByIdAndDelete(req.params.id);
          if (!deletedUser) {
            return res.status(404).json({ message: "User Not Found" });
          }
          res.json({ message: "User Deleted" });
        } catch (error) {
          console.error(error);  // Log the error for better debugging
          res.status(500).json({ message: "Invalid User ID" });
        }
      });
      

app.listen(3000,()=>console.log("Server running on port 3000"));
