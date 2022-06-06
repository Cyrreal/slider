import { Slider } from "./Components/Slider";
import { useState } from "react";
import "./App.css";

function App() {
  const [userOnPage, setUserOnPage] = useState(document.visibilityState);

  return (
    <div className="containerSlider">
      <Slider userOnPage={userOnPage} />
      <div className="sad">
        <img
          className="img_sad"
          src="https://www.gifcen.com/wp-content/uploads/2022/04/pepe-gif-5.gif"
          alt="..."
        />
      </div>
    </div>
  );
}

export default App;
