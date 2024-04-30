/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

import "./sidebar.css";
import { Label, Input } from "../../Shared/index";
import { colors, animateOptions } from "../../constants/constants";

const Sidebar = ({
  inputSets,
  onAddBox,
  onDeleteBox,
  onAnimateBox,
  onStopAnimation,
  setInputSets,
}) => {
  const [inputSet, setInputSet] = useState({
    width: 150,
    height: 100,
    color: "red",
    step: "",
    interval: "",
    animationPath: "Select",
  });

  const [animationState, setAnimationState] = useState(
    Array(inputSets.length).fill(false)
  );

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newInputSets = [...inputSets];
    newInputSets[index] = { ...newInputSets[index], [name]: value };
    setInputSets(newInputSets);
  };

  const handleStopClick = (index) => {
    onStopAnimation(index);
  };

  const handleAnimateClick = (index) => {
    onAnimateBox(index);
  };

  const handleClick = () => {
    onAddBox(inputSet);
  };

  const handleDeleteClick = (index) => {
    onDeleteBox(index);
  };

  const isAllFieldsFilled = (inputSet) => {
    for (const key in inputSet) {
      if (inputSet.hasOwnProperty(key)) {
        if (inputSet[key] === "" || inputSet[key] === "Select") {
          return false;
        }
      }
    }
    return true;
  };

  return (
    <div className="sidebar-div-container">
      <h1 className="sidebar-heading">Sidebar</h1>
      <button className="button" onClick={handleClick} type="button">
        Click
      </button>
      {inputSets.map((inputSet, index) => (
        <div className="input-container" key={index}>
          <div className="input-group">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <h2>{`Box ${inputSet.id} Controls`}</h2>
              <button onClick={() => handleDeleteClick(index)} style={{height: "40px", marginLeft: "10px"}} className="button" type="button">{`Delete Box ${inputSet.id}`}</button>
            </div>
            <Label htmlFor={`width${index}`} text="Width" />
            <Input
              id={`width${index}`}
              name="width"
              type="number"
              placeholder="Width"
              value={inputSet.width}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="input-group">
            <Label htmlFor={`height${index}`} text="Height" />
            <Input
              id={`height${index}`}
              name="height"
              type="number"
              placeholder="Height"
              value={inputSet.height}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="input-group">
            <Label className="label" htmlFor={`color${index}`} text="Color" />
            <select
              className="select"
              id={`color${index}`}
              name="color"
              value={inputSet.color}
              onChange={(e) => handleInputChange(index, e)}
            >
              {colors &&
                colors.length > 0 &&
                colors.map((each) => (
                  <option key={each.id} value={each.value}>
                    {each.value}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-group">
            <Label htmlFor={`step${index}`} text="Step" />
            <Input
              id={`step${index}`}
              name="step"
              type="number"
              placeholder="Step"
              value={inputSet.step}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="input-group">
            <Label htmlFor={`interval${index}`} text="Interval" />
            <Input
              id={`interval${index}`}
              name="interval"
              type="number"
              placeholder="Interval"
              value={inputSet.interval}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="input-group">
            <Label htmlFor={`animationPath${index}`} text="Animation path" />
            <select
              className="select"
              id={`animationPath${index}`}
              name="animationPath"
              value={inputSet.animationPath}
              onChange={(e) => handleInputChange(index, e)}
            >
              <option>Select</option>
              {animateOptions &&
                animateOptions.length > 0 &&
                animateOptions.map((each) => (
                  <option key={each.id} value={each.value}>
                    {each.value}
                  </option>
                ))}
            </select>
          </div>
          <div className="button-group">
            <button
              disabled={!isAllFieldsFilled(inputSet)}
              className="button animate-button"
              type="button"
              onClick={() => handleAnimateClick(index)}
            >
              Animate
            </button>
            <button
              disabled={!isAllFieldsFilled(inputSet)}
              className="button stop-button"
              onClick={() => handleStopClick(index)}
              type="button"
            >
              Stop
            </button>
          </div>
          <hr className="hr" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
