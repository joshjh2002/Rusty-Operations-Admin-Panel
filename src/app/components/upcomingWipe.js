import { useState } from "react";
import { useEffect } from "react";
import "../globals.css";

export default function UpcomingWipe() {
  const [forceWipe, setForceWipe] = useState();
  const [midWipe, setMidWipe] = useState();
  const [nextForceWipe, setNextForceWipe] = useState();

  useEffect(() => {
    // get the next force wipe
    let d = new Date();
    d.setDate(1);
    while (d.getDay() !== 4) {
      d.setDate(d.getDate() + 1);
    }
    setForceWipe(d);

    // get the next force wipe
    d.setDate(1);
    d.setMonth(d.getMonth() + 1);
    while (d.getDay() !== 4) {
      d.setDate(d.getDate() + 1);
    }
    setNextForceWipe(d);

    // get the middle of the wipe
    let middle = new Date((forceWipe.getTime() + nextForceWipe.getTime()) / 2);
    setMidWipe(middle);
  });

  return (
    <div className="flex h-1/2">
      <h1>Upcoming Wipes</h1>
      <ul>
        <li>
          <h2>Currect Force Wipe</h2>
          <p>{forceWipe ? forceWipe.toLocaleDateString() : "Calculating..."}</p>
        </li>
        <li>
          <h2>Mid Wipe</h2>
          <p>{midWipe ? midWipe.toLocaleDateString() : "Calculating..."}</p>
        </li>
        <li>
          <h2>Next Force Wipe</h2>
          <p>
            {nextForceWipe
              ? nextForceWipe.toLocaleDateString()
              : "Calculating..."}
          </p>
        </li>
      </ul>
    </div>
  );
}
