import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slider';
import SwiperCaroussel from './components/Swiper/SwiperCaroussel';
import React, { useState } from "react"; 
import ReactPlayer from "react-player";

function App() {
  const [videoFilePath, setVideoFilePath] = useState(null);


  const handleVideoUpload = (event) => {
  console.log("oui");
  setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  function handleClick(event) {
    console.log("oui");
  }

  return (
    <div className="App">
      <Navbar></Navbar> 

      <div className="params">
        <div className="sildersContainer">
          <div className="slider">
            <h2>Différence entre les images</h2>
            <Slider></Slider>
          </div>
        </div>
        <div>
        <input type="file" onChange={handleVideoUpload} />
        <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />
        </div>
      </div>
      <div className="button">
        <button type="button">VALIDER</button>
      </div>
      <div className="keyframes" onClick={handleClick}>
        <SwiperCaroussel></SwiperCaroussel>
      </div>
    </div>
  );
}

export default App;







