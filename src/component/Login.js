import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { UserAuth } from "../context/AuthContext";
function Login() {
  const { loginUser } = UserAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState();

  const Login = async () => {
    try {
      await loginUser(userEmail, userPass);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    //   <div class="mb-4">
    //     <label
    //       class="block text-grey-darker text-sm font-bold mb-2"
    //       for="username"
    //     >
    //       Username
    //     </label>
    //     <input
    //       class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
    //       id="username"
    //       type="text"
    //       placeholder="Username"
    //       onChange={(e) => setUserEmail(e.target.value)}
    //     />
    //   </div>
    //   <div class="mb-6">
    //     <label
    //       class="block text-grey-darker text-sm font-bold mb-2"
    //       for="password"
    //     >
    //       Password
    //     </label>
    //     <input
    //       class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
    //       id="password"
    //       type="password"
    //       placeholder="******************"
    //       onChange={(e) => setUserPass(e.target.value)}
    //     />
    //     <p class="text-red text-xs italic">Please choose a password.</p>
    //   </div>
    //   <div class="flex items-center justify-between">
    //     <button
    //       class="bg-blue bg-red-300 text-white font-bold py-2 px-4 rounded"
    //       type="button"
    //       onClick={Login}
    //     >
    //       Sign In
    //     </button>
    //     <a
    //       class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
    //       href="#"
    //     >
    //       <Link to="/register">Register</Link>
    //     </a>
    //   </div>
    // </div>
    // Here
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Login To Your Account
        </div>

        <div class="mt-10">
          <div class="flex flex-col mb-6">
            <label
              for="email"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              E-Mail Address:
            </label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <input
                id="email"
                type="email"
                name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="E-Mail Address"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Password:
            </label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>

              <input
                id="password"
                type="password"
                name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Password"
                onChange={(e) => setUserPass(e.target.value)}
              />
            </div>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              onClick={Login}
            >
              <span class="mr-2 uppercase">Login</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <span>
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            <span class="ml-2">
              <Link to="/register"> You dont have an account?</Link>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;