import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const { facebookSignIn } = useContext(AuthContext);
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const googleSignInHandle = () => {
    googleSignIn()
      .then((result) => {
        const GoogleUser = result.user;
        console.log(GoogleUser, "Google sign in succesfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const facebookSignInHandle = () => {
    facebookSignIn()
      .then((result) => {
        const facebookUser = result.user;
        console.log(facebookUser, "Facebook sign in succesfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const resetPasswordhandle = (email) => {
    resetPassword()
      .then(() => {
        alert("Please Check your Email");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .required("Email is mendatory")
      .min(3, "Password must be at 3 char long"),

    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(formOptions);
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser, "login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className=" container mx-auto h-auto flex justify-center items-center">
      <div className="container mx-auto bg-transparent rounded-lg p-8 m-5 bg-gradient-to-r from-pink-500 to-blue-700 max-w-lg shadow-2xl">
        <div className="flex justify-center font-bold text-black text-3xl p-4 mb-5">
          Login
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-black">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="bg-transparent border rounded border-gray-700 text-black p-2 "
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="bg-white text-red-500 rounded p-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-black">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Set a Passward"
              className="bg-transparent border rounded border-gray-700 text-black p-2"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="bg-white text-red-500 rounded p-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="border rounded p-2 w-full font-bold text-black bg-green-300 "
          >
            Login
          </button>
        </form>
        <p>
          {" "}
          <button
            className="border rounded px-1 mt-5 font-bold "
            onClick={resetPasswordhandle}
          >
            {" "}
            Forget Password? Reset
          </button>{" "}
        </p>

        <div className="flex w-full mt-3">
          <div className="grid h-16 flex-grow  card bg-transparent shadow-lg rounded-box place-items-center">
            <div
              className="flex gap-4 justify-center items-center cursor-pointer"
              onClick={googleSignInHandle}
            >
              <FaGoogle size={25}></FaGoogle>{" "}
              <span className="font-bold text-xl">Google</span>
            </div>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div
            className="grid h-16 flex-grow card bg-transparent shadow-lg rounded-box place-items-center cursor-pointer"
            onClick={facebookSignInHandle}
          >
            <div className="flex gap-4 justify-center items-center">
              <FaFacebook size={25}></FaFacebook>{" "}
              <span className="font-bold text-xl">Facebook</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-center mx-10 mt-5">
          <h1 className="text-white">New on Collage Booking?</h1>
          <a
            className="bg-blue-200 font-bold text-black rounded-lg p-2"
            href="/register"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
