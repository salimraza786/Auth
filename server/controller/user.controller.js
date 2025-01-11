import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const Register = async(req , res) => {
    const {username , email , password} = req.body 
    if(!username || !email || !password){
      return res.status(401).json({
         success : false ,
         message : "All Fields are required"
      })
    }

    const isExist = await User.findOne({email})
    if(isExist){
      return res.status(401).json({
        success : false ,
        message : "User Already exist in database"
     })
    }

    const hashPassword = await bcrypt.hash(password , 10)
    const user = await User.create({
      username,
      email,
      password: hashPassword
    })

    return res.status(201).json({
       success : true ,
       message : "User Created Successfully !!!",
       user
    })
}

export const Login = async(req , res) => {
   const {email , password} = req.body 
   if(!email || !password){
    return res.status(401).json({
       success : false ,
       message : "All Fields are required"
    })
  }

  const user = await User.findOne({email})
  if(!user){
    return res.status(401).json({
      success : false ,
      message : "User does not exist in database"
   })
  }

  const passwordMatch = await bcrypt.compare(password , user.password)
  if(!passwordMatch){
    return res.status(401).json({
      success : false ,
      message : "email or password are incorrect"
   })
  }

  const token = await jwt.sign(
    { userId: user._id }, 
    process.env.SECRET_KEY, 
    { expiresIn: '1h' } // Corrected 'expiredIn' to 'expiresIn'
  );
  

  return res
  .status(200)
  .cookie("token", token, {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    httpOnly: true, // Makes the cookie inaccessible via JavaScript (for security)
  })
  .json({
    success: true,
    message: `Welcome back, ${user.username}!`,
  });

}