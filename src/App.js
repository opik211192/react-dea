import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [myName, setMyName] = useState("ibenk");
  const [myAge, setMyAge] = useState(25);

  const handleClick = () => {
    // if (myName === "ibenk") {
    //   setMyName("pratama");
    // } else {
    //   setMyName("ibenk");
    // }

    myName === "pratama" ? setMyName("ibenk") : setMyName("pratama");
    //setMyName("Dea Afrizal");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{myName}</p>
        <button onClick={handleClick} className="mt-5">
          {myName === "pratama" ? "Balikin Nama" : "Ganti nama"}
        </button>

        <div className="d-flex mt-3">
          <button onClick={() => setMyAge((prev) => prev + 1)} className="me-5">
            +
          </button>
          <p>{myAge}</p>
          <button onClick={() => setMyAge((prev) => prev - 1)} className="ms-5">
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
