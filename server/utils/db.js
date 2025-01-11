import mongoose from "mongoose";
import chalk from 'chalk';

const connectDB = async (req , res) => {
   try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log(chalk.blue.bgBlue.bold(`Mongodb Connected Successfully !!!`))
   } catch (error) {
     console.log(error)
   }
}
export default connectDB