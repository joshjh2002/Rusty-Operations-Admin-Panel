"use client";

import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) router.push("/");
      else if (user) {
        // user logged in
      }
    });
    return;
  }, [router, router.push]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1>Homepage</h1>
      <div className="login">
        <button onClick={handleSignout}>Sign Out</button>
      </div>
    </div>
  );
}
