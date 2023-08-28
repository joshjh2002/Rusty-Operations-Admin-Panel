// DEPENDENCIES //

import { useState } from "react";
import { useEffect } from "react";

// CSS //

import "../globals.css";

export default function Redeploy() {
  // STATES //

  const [forceWipe, setForceWipe] = useState("");
  const [midWipe, setMidWipe] = useState("");
  const [nextForceWipe, setNextForceWipe] = useState("");

  // EFFECTS //

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

  let redeploy = () => {
    window.open(
      "https://api.vercel.com/v1/integrations/deploy/prj_WOSkXXB36vhZlryz8Tqej7Rms9ZH/FOxlrd9lKb",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <section className="m-4">
      <div className="block items-center justify-center text-center border-2 rounded-md border-solid border-black">
        <h1 className="rusty-font uppercase text-xl font-bold underline">
          Redeploy Website
        </h1>
        <p>
          Use this option to redeploy the website. This should be done to force
          update the websites metadata as it is build on each deployment to
          ensure that metadata can be generated properly.
        </p>
        <button
          className="border-2 border-black rounded-md p-2 m-2"
          onClick={redeploy}
        >
          Redeploy Website
        </button>
      </div>
    </section>
  );
}
