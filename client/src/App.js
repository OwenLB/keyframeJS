import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slider';
import SwiperCaroussel from './components/Swiper/SwiperCaroussel';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 

      <div className="params">
        <div className="sildersContainer">
          <div className="slider">
            <h2>Slider 1</h2>
            <Slider></Slider>
            <h2>Slider 2</h2>
            <Slider></Slider>
            <h2>Slider 3</h2>
            <Slider></Slider>
          </div>
        </div>
        <ReactPlayer style={{marginTop: "35px"}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />        
      </div>
      <div className="button">
        <button type="button">VALIDER</button>
      </div>
      <div className="keyframes">
        <SwiperCaroussel></SwiperCaroussel>
      </div>
    </div>
  );
}

export default App;







