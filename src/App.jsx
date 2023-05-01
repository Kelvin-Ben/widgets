import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Count from "./components/Count";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is front end development framework",
  },
  {
    title: "Why React",
    content: "React is the best framework",
  },
  {
    title: "How to learn react?",
    content: "You have to visit the official website for concepts",
  },
];
const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropDown] = useState(true);
  return (
    <div>
      <button onClick={() =>setShowDropDown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      }
    </div>
  );
};

export default App;
