const express = require("express");
const User = require("./userSchema");
const app = express();
const db = require("./db");
const userValidation = require("./middleware/userMiddleware");
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.post("/",userValidation, async (req, res) => {
  let data = await User.create(req.body);
  res.send(data);
});

app.patch("/:id",userValidation, async (req, res) => {
  let data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let data = await User.findByIdAndDelete(req.params.id);
  res.send({message:"User Deleted !!",data});
});

app.listen(8090, () => {
  console.log("Server Started Successfully ");
  db();
});