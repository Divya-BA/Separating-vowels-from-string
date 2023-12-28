import React from "react";
import { useLocation } from "react-router-dom";

function RemovedString() {
  const location = useLocation();
  const InputString = location.state?.InputString || "";
  const removedVowels = (str) => {
    return str.replace(/[aeiouAEIOU]/g, "");
  };
  const RemovedString = removedVowels(InputString);
  return (
    <div className="main1">
      <div className='div'><b>Original String:</b><q>{InputString}</q></div>
      <div className='div'><b>Remining character from Given string:</b><q>{RemovedString}</q></div>
    </div>
  );
}

export default RemovedString;
