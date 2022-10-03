import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [value, setValue] = useState("");

  var IndiaDiction = [
    "Taj Mahal",
    "5/5",
    "Qutub minal",
    "4.5/5",
    "Gateway of India",
    "3/5"
  ];
  var USADiction = [
    "Mount Rushmore",
    "4/5",
    "Statue of Liberty",
    "3/5",
    "Washington Monument",
    "3.5/5"
  ];
  var RussiaDiction = [
    "Winter Palace",
    "4.5/5",
    "Moscow Metro",
    "5/5",
    "Kremlin",
    "2.5/5"
  ];

  function Indiahandler() {
    value = IndiaDiction;
    setValue(value);
  }

  function Usahandler() {
    value = USADiction;
    setValue(value);
  }

  function Russiahandler() {
    value = RussiaDiction;
    setValue(value);
  }

  return (
    <div className="App">
      <h1>Monuments App</h1>
      <button onClick={Indiahandler} className="button">
        India
      </button>

      <button onClick={Usahandler} className="button">
        Usa
      </button>
      <button onClick={Russiahandler} className="button">
        Russia
      </button>

      <div className="monu">
        <div className="monu1">
          {value[0]} &nbsp;
          {value[1]}
        </div>
        <div className="monu1">
          {value[2]} &nbsp;
          {value[3]}
        </div>
        <div className="monu1">
          {value[4]} &nbsp;
          {value[5]}
        </div>
      </div>
    </div>
  );
}
