const { response } = require('express');
const User = require('../model/userModel.js');

const terminateUserAuth = async(new_user)=>{
   new_user.isAuthenticated = false;
   await User.findByIdAndUpdate(new_user.id, new_user);
};
const encryptPassword = (raw_text)=>{
   const cypher_text = raw_text+"#"+ "aRandomSecretKey";
   return cypher_text;
};
const registerUser = async(req, res, next)=>{
   const user = req.body;
   user.password = encryptPassword(user.password);
   // console.log(user);
   const new_user= await User.create(user);
   if(new_user){
      const id= setTimeout(()=>terminateUserAuth(new_user), 60*1000);
      clearInterval(id); 
      console.log("user registered successfully");
      res.json({
         success: true,
         payload: new_user,
         message: "Registered"
      })  
   }
   else {
      res.json({
         success: false,
         message: "Registration failed"
      })
   }
}
const Password_matched= (user, actual_user)=>{
   if(encryptPassword(user.password) === (actual_user.password)) return true;
   else return false;
} 
const loginUser = async(req, res, next)=>{
   const user = req.body['user'];
   const name = user.name;
   // check for user in db
   const actual_user = await User.findOne({"name": {
      $regex: name
   }})
   if(!actual_user){
      res.status(404).json({
         success: false,
         message: "user not found"
      })
   }
   if(Password_matched(user,actual_user)){
      actual_user.isAuthenticated= true;
      User.findByIdAndUpdate(actual_user.id, actual_user);
      const id= setTimeout(()=>terminateUserAuth(new_user), 60*1000);
      clearInterval(id);
      console.log("user logged in successfully");
      res.json({
         success: true,
         message: "user found",
         user: actual_user
      })
   }
   else{
      res.status(404).json({
         success: false,
         message: "wrong name or password"
      })
   }

}
const updateUser = async(req, res, next)=>{
   const user = req.body["new_user_details"];
   const name = req.body.name;
   if(user.password) user.password = encryptPassword(user.password);
   // check for user in db
   const actual_user = await User.findOneAndUpdate({"name": {
      $regex: name
   }}, user);
   console.log(actual_user);
   
   if(!actual_user){
      res.status(404).json({
         success: false,
         message: "Could not update user details"
      })
   }
   else{
      console.log("user details updated successfully");
      res.json({
         success: true,
         user: actual_user,
         message: "user details updated successfully"
      })
   }

}

module.exports = {registerUser, loginUser, updateUser};