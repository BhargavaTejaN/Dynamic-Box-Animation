/* eslint-disable no-unused-vars */

import { useState } from "react";

import "./App.css";
import { MainFile, Sidebar } from "./components/index";

const App = () => {
  const [inputSets, setInputSets] = useState([]);

  const handleAddBox = (inputDetails) => {
    const newBox = {
      id: inputSets.length + 1,
      ...inputDetails,
      animate: false,
      position: { x: 0, y: 0 },
    };
    setInputSets([...inputSets, newBox]);
  };

  const handleDeleteBox = (index) => {
    const newInputSets = inputSets.filter((_, i) => i !== index);
    setInputSets(newInputSets);
  };

  const handleAnimateBox = (index) => {
    console.log("Animation button is clicked");
    const newInputSets = [...inputSets];
    const box = newInputSets[index];
    
    // Get the dimensions of the main container
    const mainContainer = document.querySelector('.main-container');
    const mainContainerRect = mainContainer.getBoundingClientRect();
  
    switch (box.animationPath) {
      case "Top left corner":
        box.animate = true;
        box.position = { x: 0, y: 0 };
        break;
      case "Top right corner":
        box.animate = true;
        box.position = { x: mainContainerRect.width - box.width, y: 0 };
        break;
      case "Bottom left corner":
        box.animate = true;
        box.position = { x: 0, y: mainContainerRect.height - box.height };
        break;
      case "Bottom right corner":
        box.animate = true;
        box.position = {
          x: mainContainerRect.width - box.width,
          y: mainContainerRect.height - box.height,
        };
        break;
      default:
        break;
    }
    setInputSets(newInputSets);
  };
  
  // const handleStopAnimation = (index) => {
  //   console.log("index of stop box : ",index);
  //   const newInputSets = [...inputSets];
  //   newInputSets[index].animate = false;
  //   setInputSets(newInputSets);
  // }

  const handleStopAnimation = (index) => {
    const newInputSets = [...inputSets];
    const box = newInputSets[index];

    const element = document.getElementById(`box-${box.id}`);
    const transformStyle = window
      .getComputedStyle(element)
      .getPropertyValue("transform");
    const currentPosition = transformStyle.match(/[-+]?[0-9]*\.?[0-9]+/g);

    box.position = {
      x: parseFloat(currentPosition[4]),
      y: parseFloat(currentPosition[5]),
    };

    element.style.transition = "none";
    element.style.transform = `translate(${box.position.x}px, ${box.position.y}px)`;

    setInputSets(newInputSets);
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <MainFile inputSets={inputSets} />
      </div>
      <div className="vertical-line"></div>
      <div className="sidebar-container">
        <Sidebar
          inputSets={inputSets}
          setInputSets={setInputSets}
          onAddBox={handleAddBox}
          onDeleteBox={handleDeleteBox}
          onAnimateBox={handleAnimateBox}
          onStopAnimation={handleStopAnimation}
        />
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
