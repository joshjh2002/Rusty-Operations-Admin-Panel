import { useState } from "react";
import { useEffect } from "react";
import "../globals.css";

export default function UpcomingWipe() {
  const [forceWipe, setForceWipe] = useState("");
  const [midWipe, setMidWipe] = useState("");
  const [nextForceWipe, setNextForceWipe] = useState("");

  useEffect(() => {
    // get the next force wipe
    let forceWipeDate = new Date();
    forceWipeDate.setDate(1);
    while (forceWipeDate.getDay() !== 4) {
      forceWipeDate.setDate(forceWipeDate.getDate() + 1);
    }
    setForceWipe(forceWipeDate);

    // get the next force wipe
    let nextForceWipeDate = new Date();
    nextForceWipeDate.setDate(1);
    nextForceWipeDate.setMonth(nextForceWipeDate.getMonth() + 1);
    while (nextForceWipeDate.getDay() !== 4) {
      nextForceWipeDate.setDate(nextForceWipeDate.getDate() + 1);
    }
    setNextForceWipe(nextForceWipeDate);

    // get the middle of the wipe
    let middle = new Date(
      (forceWipeDate.getTime() + nextForceWipeDate.getTime()) / 2
    );
    setMidWipe(middle);
  }, []);

  return (
    <div className="w-3/4 block items-center justify-center text-center">
      <h1 className="rusty-font uppercase text-xl">Upcoming Wipes</h1>
      <div className="grid grid-cols-3 gap-8 content-center">
        <div>
          <h2 className="rusty-font uppercase text-l">Current Force Wipe</h2>
          <p className="rusty-font">
            {forceWipe ? forceWipe.toLocaleDateString() : "Calculating..."}
          </p>
        </div>
        <div>
          <h2 className="rusty-font uppercase text-l">Mid Wipe</h2>
          <p className="rusty-font">
            {midWipe ? midWipe.toLocaleDateString() : "Calculating..."}
          </p>
        </div>
        <div>
          <h2 className="rusty-font uppercase text-l">Next Force Wipe</h2>
          <p className="rusty-font">
            {nextForceWipe
              ? nextForceWipe.toLocaleDateString()
              : "Calculating..."}
          </p>
        </div>
      </div>
    </div>
  );
}
