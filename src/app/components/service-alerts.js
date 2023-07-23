// DEPENDENCIES //
import { auth } from "../firebaseInit.js";
import { useEffect, useState } from "react";
import { db } from "../firebaseInit.js";
import { ref, onValue, set } from "firebase/database";

export default function Articles() {
  const [service, setService] = useState({});

  // Check if user is logged in
  useEffect(() => {
    const serviceRef = ref(db, "service");
    onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      let temp = [];
      temp = data;
      setService(temp);
    });
  }, []);

  const writeService = () => {
    set(ref(db, "service"), service);
    console.log(service);
  };

  const inputStyle = "w-[100%] border border-black rounded-md p-2";

  return (
    <section
      className="m-4 p-4 border-2 border-black rounded-md"
      id="service-alerts"
    >
      <h2 className="text-xl">Service Alerts</h2>
      <div className="grid grid-cols-1 gap-2">
        <div className="grid grid-cols-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            defaultValue={service.title}
            className={inputStyle}
            onChange={(e) => (service.title = e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="title">Description</label>
          <input
            type="text"
            defaultValue={service.description}
            className={inputStyle}
            onChange={(e) => (service.description = e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="title">Timestamp</label>
          <input
            type="text"
            defaultValue={service.timestamp}
            className={inputStyle}
            onChange={(e) => (service.timestamp = e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="title">File</label>
          <input
            type="text"
            defaultValue={service.file}
            className={inputStyle}
            onChange={(e) => (service.file = e.target.value)}
          />
        </div>
        <button
          className="border-2 border-black rounded-md p-2"
          onClick={writeService}
        >
          Save
        </button>
      </div>
    </section>
  );
}
