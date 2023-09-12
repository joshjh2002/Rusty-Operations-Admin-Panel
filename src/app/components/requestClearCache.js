// CSS //

import { useEffect, useState } from "react";
import "../globals.css";

export default function ClearCache() {
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {}, []);

  const clearCacheAlert = () => {
    if (name == "" || reason == "") {
      alert("Please fill out all fields.");
      return;
    }

    const objectWithData = {
      content: "<@362647384502697984>",
      embeds: [
        {
          title: "Website Cache Clear Request",
          description: `${name} has requested a cache clear for the following reason:\n${reason}`,
          color: 13724201,
          author: {
            name: name,
            url: "https://www.rustyoperations.net",
            icon_url: "https://www.rustyoperations.net/img/rust-logo.jpg",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };
    fetch(
      "https://discord.com/api/webhooks/1072149117884694568/4eyVA3TthpmwIWqFFfM8AdFP4j4JMa3G-TWTZZMwEE3gbap9ORHZvu_RkuSSF3r0dOvw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectWithData),
      }
    );
  };

  return (
    <section className="m-4">
      <div className="block items-center justify-center text-center border-2 rounded-md border-solid border-black">
        <h1 className="rusty-font uppercase text-xl font-bold underline">
          Clear Website Cache Request
        </h1>
        <p>
          Use this option to alert Josh that the server cache needs to be
          cleared. This will allow metadata to be regenerated after they are
          changed. Josh will do this ASAP.
          <br />
          Please state your name and the reason for the request below.
        </p>
        <div className="flex">
          <input
            className="border-2 h-16 m-4 border-black rounded-md p-2"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full h-16 m-4 max-w-full border-2 border-black rounded-md p-2"
            placeholder="Reason"
            onChange={(e) => setReason("```" + e.target.value + "```")}
          />
        </div>
        <button
          className="border-2 border-black rounded-md p-2 m-2"
          onClick={clearCacheAlert}
        >
          Send Alert
        </button>
      </div>
    </section>
  );
}
