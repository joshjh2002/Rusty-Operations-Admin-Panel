"use client";

import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseInit.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, [router, router.push]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <div className="center">
        <h1>Login or Create Account</h1>

        <div className="inputDiv">
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="buttonDiv">
          <button onClick={handleSignin}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
