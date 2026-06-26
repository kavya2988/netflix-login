const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



const users = [
  {
    email: "kavya@gmail.com",
    password: "123"
  },
  {
    email: "abc@gmail.com",
    password: "456"
  }
];

app.post("/login", (req, res) => {

  const user = users.find(
    (u) =>
      u.email === req.body.email &&
      u.password === req.body.password
  );

  if (user) {
    res.send("login success");
  } else {
    res.send("login failed");
  }

});





app.listen(3000,function()
{
console.log("server started")
})
