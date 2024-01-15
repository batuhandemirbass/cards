
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import Html from'./img/html.jpeg';
import Css from'./img/css.jpeg';
import Js from'./img/js.jpeg';
import React from'./img/react.jpeg';
import './scss/Cards.scss';
import Heading from './Heading';

function App() {
  
  return (
    <div className="App">
      <Heading></Heading>
      <div className="container pt-5">
        <div className="row">
          <div className="col mb-3">
          <Cards img={Html} title="Html"description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas."></Cards>
          </div>
          <div className="col mb-3">
          <Cards img={Css} title="Css"description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas."></Cards>
          </div>
          <div className="col mb-3">
          <Cards img={Js} title="Javascript"description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas."></Cards>
          </div>
          <div className="col mb-3">
          <Cards img={React} title="React"description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas.dolor sit amet consectetur adipisicing elit. Dolor, quas."></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
