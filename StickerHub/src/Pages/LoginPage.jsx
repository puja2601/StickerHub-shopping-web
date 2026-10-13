import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Later connect this with your Spring Boot login API
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-700 flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏷️</div>

          <h1 className="text-4xl font-bold mb-3">
            Welcome to <span className="text-pink-500">StickerHub</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300">
            Login to continue your sticker journey ✨
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-100 dark:bg-gray-600 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-7 dark:text-blue-200">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block font-medium mb-2 dark:text-white">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium dark:text-white">Password</label>

                <button
                  type="button"
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Forgot Password?
                </button>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-gray-300 dark:bg-gray-500 flex-1"></div>

            <span className="text-gray-500 dark:text-gray-300 text-sm">OR</span>

            <div className="h-px bg-gray-300 dark:bg-gray-500 flex-1"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 font-semibold hover:bg-gray-50 dark:hover:bg-gray-500 transition duration-300 dark:text-white"
          >
            <span className="mr-2">G</span>
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center mt-7 text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-pink-500 font-semibold hover:text-pink-600"
            >
              <Link to={"/register"}>Create Account</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
