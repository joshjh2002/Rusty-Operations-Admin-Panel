"use client";

// DEPENDENCIES //

import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseInit.js";
import { useRouter } from "next/navigation";

// CSS //

import "./globals.css";
import "./fonts.css";

export default function Home() {
  // DEPENDENCIES //
  const router = useRouter();

  // STATES //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // EFFECTS //
  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in so redirect to dashboard
        router.push("/dashboard");
      }
    });
  }, [router, router.push]);

  // HANDLERS //

  // Handle email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle sign in
  const handleSignin = () => {
    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      // Redirect to dashboard
      .then(() => {
        router.push("/dashboard");
      })
      // Catch error
      .catch((err) => alert(err.message));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rusty-font shadow-lg p-5 w-1/3">
        <h1 className="text-center text-2xl rusty-font-title">
          Rusty Operations Admin Panel
        </h1>

        <div className="grid grid-cols-2 gap-8 content-center mb-5 mt-5">
          <div className="grid grid-rows-1 content-center m-2">
            <input
              className="shadow focus:shadow-lg duration-500 shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="grid grid-rows-1 content-center m-2">
            <input
              className="shadow focus:shadow-lg duration-500 easy-in-out appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="border-solid border rounded-full border-yellow-500 pt-1 pb-1 uppercase pl-24 pr-24 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
