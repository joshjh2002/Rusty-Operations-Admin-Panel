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
    <section className="m-4 w-1/2">
      <div className="grid grid-rows-2 content-center max-w-full w-full">
        <div>
          <textarea
            className="w-full max-w-full border-2 border-black rounded-md p-2 h-fill resize-none"
            placeholder="Announcement"
            onChange={handleAnnouncementChange}
          />
        </div>
        <div className="grid grid-cols-3 content-center gap-4">
          <button
            className="border-2 border-black rounded-md p-2 "
            onClick={messageDiscord}
          >
            Send to Discord
          </button>
          <button
            className="border-2 border-black rounded-md p-2 "
            onClick={messageTwitter}
          >
            Send to Twitter
          </button>
          <button
            className="border-2 border-black rounded-md p-2"
            onClick={messageFacebook}
          >
            Send to Facebook
          </button>
        </div>
      </div>
    </section>
  );
}
