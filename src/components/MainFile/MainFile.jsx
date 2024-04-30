/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";

import './mainfile.css';

const MainFile = ({ inputSets }) => {
  useEffect(() => {
    inputSets.forEach((box, index) => {
      const { interval } = box;
      if (box.animate) { 
        const element = document.getElementById(`box-${box.id}`);
        element.style.transition = `transform ${parseInt(interval)}s ease-in-out`;
        element.style.transform = `translate(${box.position.x}px, ${box.position.y}px)`;
      }
    });
  }, [inputSets]);

  return (
    <div>
      {inputSets.length > 0 ? (
        <>
          {inputSets.map((inputSet) => (
            <div
              key={inputSet.id}
              id={`box-${inputSet.id}`}
              style={{
                width: parseInt(inputSet.width),
                height: parseInt(inputSet.height),
                backgroundColor: inputSet.color,
                position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                // TODO : change the below text color if it's black, change to white or else it should be black
              }}
            >
              {inputSet.id}
            </div>
          ))}
        </>
      ) : (
        <span>Click The Button To Add Something</span>
      )}
    </div>
  );
};

export default MainFile;
