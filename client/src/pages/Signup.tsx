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
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  type User = {
    username: string;
    email: string;
    password: string;
  };

  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://auth-backend-q0zr.onrender.com",
        user, // Sending user object in the request body
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response);
      if (response.data.message) {
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Safely handle Axios-specific errors
        toast.error(error.response.data.message);
      } else {
        // Handle unknown errors
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[450px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Signup</CardTitle>
              <Link to="/">
                <IoMdArrowRoundBack
                  size={20}
                  className="hover:bg-slate-300 rounded-full"
                />
              </Link>
            </div>
            <CardDescription>Welcome to our signup page.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text" // Added type attribute
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  id="username"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email" // Added type attribute
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password" // Added type attribute
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" className="w-full"> {/* Added type="submit" */}
              Signup
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
