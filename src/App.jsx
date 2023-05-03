import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Count from "./components/Count";
import Search from "./components/Search";
import Translate from "./components/Translate";

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

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
