"use client";

// DEPENDENCIES //

import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseInit.js";
import { useRouter } from "next/navigation";

import { Converter } from "showdown";

import "./style.css";
import "./fonts.css";
import "./globals.css";

export default function Dashboard() {
  const router = useRouter();

  // STATES //
  const [content, setContent] = useState();
  const [data, setData] = useState();

  // EFFECTS //
  useEffect(() => {
    let converter = new Converter();
    let html = converter.makeHtml(data);
    setContent(html);
  }, [setData, data]);

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
      <div className="bg"></div>
      <div className="wrapper">
        <div className="markdown">
          <textarea
            className="w-full max-w-full border-2 border-black rounded-md p-2"
            placeholder="Markdown"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="content">
          <section id="article" className="article">
            <div
              className="block p-4"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </section>
        </div>
      </div>
    </div>
  );
}
