import React from "react";
import "../style/home.css";
import { Route } from "react-router-dom";
import fruitimg from "../images/HomeImage.jpg";
import GridStack from "../components/gridstack";
import MethodStep1 from "../components/methodstep1";
import MethodStep2 from "../components/methodstep2";
import MethodStep3 from "../components/methodstep3";
import MethodStep4 from "../components/methodstep4";

const Home = () => {
  document.title = Route.title = "Cox Boomkwekerijen";
  return (
    <html>
      <div>
        <div class="img-container">
          <img class="fruitimg" src={fruitimg} alt="Auto" />
          <div class="centered">
            <h1>Cox Boomkwekerijen V.O.F.</h1>
          </div>
        </div>
        <div className="toptxt">
          <div className="biginfo">
            <div className="smallcontent">
              <h3 className="h3txt">
                Cox Boomkwekerijen is al 20 jaar in de industrie met klanten uit
                alle hoeken van de wereld. Wij staan voor kwaliteit en leveren
                altijd de beste fruitbomen die er zijn. Als bedrijf staan we
                altijd voor u klaar en geven wij ook een goed advies. Wilt u
                meer weten? Neem dan contact op.
              </h3>
            </div>
          </div>
        </div>
        <div className="biginfo">
          <div className="smallcontent">
            <h3 className="headergrid">
              <span>Wij staan voor</span>
            </h3>
            <GridStack />
          </div>
        </div>
        <div className="biginfo">
          <div>
            <h3 className="headergrid">
              <span>Werkwijze</span>
            </h3>
          </div>
        </div>
        <div className="bigworkinfo">
          <div className="smallcontent">
            <div className="methods">
              <MethodStep1 />
            </div>
            <div className="methods">
              <img
                src="https://i.postimg.cc/1Rdd9H81/Arrow4.png"
                height={100}
                width={100}
              />
            </div>
            <div className="methods">
              <MethodStep2 />
            </div>
            <div className="methods">
              <img
                src="https://i.postimg.cc/1Rdd9H81/Arrow4.png"
                height={100}
                width={100}
              />
            </div>
            <div className="methods">
              <MethodStep3 />
            </div>
            <div className="methods">
              <img
                src="https://i.postimg.cc/1Rdd9H81/Arrow4.png"
                height={100}
                width={100}
              />
            </div>
            <div className="methods">
              <MethodStep4 />
            </div>
          </div>
        </div>
      </div>
    </html>
  );
};

export default Home;
