import { useState } from "react";
import "../globals.css";

export default function SendAnnouncement() {
  const [announcement, setAnnouncement] = useState("");
  const messageDiscord = () => {
    const objectWithData = {
      embeds: [{ title: "Customer Announcements", description: announcement }],
    };
    fetch(
      "https://discord.com/api/webhooks/1111765318717673492/sYN6l8EzDsn0jSexNOvejrqn9ee5OrLaHqrcOcM4Tjr8XMfcG72jVq14EsU5mRkkNm28",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectWithData),
      }
    );
  };

  const messageTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(announcement),
      "_blank",
      "noreferrer"
    );
  };

  const messageFacebook = () => {
    window.open(
      "https://www.facebook.com/groups/rustyoperations",
      "_blank",
      "noreferrer"
    );
  };

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  return (
    <div className="flex h-1/2">
      <textarea
        className="border-2 border-black rounded-md p-2 m-2 w-1/2 h-fill resize-none"
        placeholder="Announcement"
        onChange={handleAnnouncementChange}
      />
      <button
        className="border-2 border-black rounded-md p-2 m-2"
        onClick={messageDiscord}
      >
        Send to Discord
      </button>
      <button
        className="border-2 border-black rounded-md p-2 m-2"
        onClick={messageTwitter}
      >
        Send to Twitter
      </button>
      <button
        className="border-2 border-black rounded-md p-2 m-2"
        onClick={messageFacebook}
      >
        Send to Facebook
      </button>
    </div>
  );
}
