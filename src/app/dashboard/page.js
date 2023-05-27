"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseInit.js";
import { useRouter } from "next/navigation";

import "../globals.css";
import "../fonts.css";

import Navbar from "../components/navbar.js";
import SendAnnouncement from "../components/sendAnnouncements.js";

export default function Dashboard() {
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

  return (
    <div>
      <Navbar />
      <SendAnnouncement />
    </div>
  );
}
