import "./App.css";
import logo from "./img/logo.svg";
import mockup from "./img/illustration-mockups.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo-wrapper">
          {" "}
          <img className="logo" src={logo} alt="huddle"></img>
        </div>
        <div className="double-col">
          <div className="col-1">
            <img className="mockup" src={mockup} alt="mockup"></img>
          </div>
          <div className="col-2">
            <h1 className="heading">Build The Community Your Fans Will Love</h1>
            <p className="text">
              Huddle re-imagines the way we build communities. You have a voice.
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="register">Register</button>
          </div>
        </div>

        <div className="social">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default App;
