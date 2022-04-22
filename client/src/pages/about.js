import "../style/about.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Route } from "react-router-dom";

function About() {
  document.title = Route.title = "Cox Boomkwekerijen";
  return (
    <body>
      <div>
        <h1>Over ons</h1>
        <div className="info">
          <h2 className="header2">
            <span>Wie zijn wij?</span>
          </h2>
          <div className="content">
            Cox Boomkwekerijen is al 20 jaar in de industrie met klanten uit
            alle hoeken van de wereld. Wij staan voor kwaliteit en leveren
            altijd de beste fruitbomen die er zijn. Als bedrijf staan we altijd
            voor u klaar en geven wij ook een goed advies. Wilt u meer weten?
            Neem dan contact op.
          </div>
          <div className="content">
            <img
              className="frimg"
              src="https://i.postimg.cc/Hn6j45wH/fruit-row-juicy-icons-modern-260nw-1517944958.jpg"
            ></img>
          </div>
        </div>
      </div>
    </body>
  );
}

export default About;
