"use client";

// DEPENDENCIES //

import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseInit.js";
import { useRouter } from "next/navigation";

// COMPONENTS //
import Navbar from "../components/navbar.js";
import SendAnnouncement from "../components/sendAnnouncements.js";
import UpcomingWipe from "../components/upcomingWipe.js";
import Articles from "../components/articles.js";

export default function Dashboard() {
  // DEPENDENCIES //
  const router = useRouter();

  // EFFECTS //
  useEffect(() => {
    // Check if user is logged in
    auth.onAuthStateChanged((user) => {
      // If user is not logged in, redirect to login page
      if (!user) router.push("/");
      // If user is logged in, do nothing
      else if (user) {
        // user logged in
      }
    });
    return;
  }, [router, router.push]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-min">
        <div className="block w-[1200px] h-min">
          <UpcomingWipe />
          <SendAnnouncement />
          <Articles />
        </div>
      </div>
    </div>
  );
}
