import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";

const Signup = () => {
  type User = {
    username : string
    email : string 
    password : string
  }
  const[user , setUser] = useState<User>({
     username: "",
     email: "",
     password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name , value} = e.target 
     setUser({...user, [name]: value})
  }

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/user/register',
        user, // Sending user object in the request body
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log('Response:', response);
      if(response.data.message){
        navigate("/login")
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[450px] ">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Signup</CardTitle>
            <Link to="/"><IoMdArrowRoundBack size={20} className="hover:bg-slate-300 rounded-full"/></Link>
          </div>
          <CardDescription>Welcome to our signup page.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">Username</Label>
                <Input 
                 name="username"
                 value={user.username}
                 onChange={handleChange}
                 id="text" placeholder="Enter Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                id="email" placeholder="Enter Your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                id="password" placeholder="Enter Password" />
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full">Signup</Button>
        </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
