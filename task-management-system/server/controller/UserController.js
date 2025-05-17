const User = require("../schema/UserSchema");
const { HashPassword, Token, ComparePassword } = require("../utils/helper");

exports.CreateUser = async (req, res) => {
try {
  let { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(403).send({ message: "User already exists" });
  }
  req.body.password = await HashPassword(password);
  user = await User.create(req.body);

  let token = await Token({
    name: user.name,
    role: user.role,
    id: user.id,
  });
  return res.status(201).send({ user, token });
} catch (error) {
  return res.status(500).send({ message:error.message });
}
};


exports.LoginUser = async (req, res) => {
 try {
  let { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).send({ message: "Invalid email"});
  }
  let isValidPassword = await ComparePassword(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send({ message: "Invalid password" });
  }
  let token = await Token({
    name: user.name,
    role: user.role,
    id: user.id,
  });
  return res.status(200).send({ user, token });
 } catch (error) {
  return res.status(500).send({ message:error.message });
 }

}

exports.GetAllUsers = async (req, res) => {
  const {role}=req.query
  let query={}
  if(role){
    query.role=role
  }
  let user = await User.find(query);
  res.status(200).send(user);
};


