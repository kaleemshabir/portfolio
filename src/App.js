import "./App.css";
import planetSportImg from "./assets/planetsprt.png";
import mobileImage from "./assets/mobileone.jpg";
import mobilethreeImg from "./assets/mobilthree.png";
import mobilefiveImg from "./assets/mobilefive.jpg";
import mobilesixImg from "./assets/mobilesix.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="head">
        <h1 className="headline">
          <span>I m Kaleem Shabir / full stack developer</span>
        </h1>
      </div>

      <div className="containertwo">
        <div className="left-content">
          <h1>gCUJO — Home Internet Security</h1>
          <p>
            CUJO is a home internet security company, providing the power of
            enterprise security solutions in a simple and elegant device. I
            helped CUJO shape their brand and user experience. Rapt Studio's
            work blurs the boundaries between space, brand and digital. I helped
            to define Rapt’s online content strategy and design a website
            showcasing over 20 years of cutting edge work for Google, IBM Adobe
            and the likes. Rapt Studio's work blurs the boundaries between
            space, brand and digital. I helped to define Rapt’s online content
            strategy and design a website showcasing over 20 years of cutting
            edge work for Google, IBM Adobe and the likes.
          </p>
          <button className="read-more-btn">
            <Link to="crowdy-news">Read More</Link>
          </button>
        </div>

        <div className="p_vis">
          <img src={planetSportImg} />
        </div>
      </div>

      <div className="containerthree">
        <div className="p_vis">
          <img src={mobileImage} />
        </div>
        <div className="left-content">
          <h1>Event Discovery Platform YPlan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor, odio at varius eleifend, libero ante ullamcorper dolor, nec
            varius ligula ligula in purus. Phasellus euismod, ipsum id vehicula
            auctor, massa justo facilisis libero, vel efficitur orci quam non
            purus. Vivamus nec sagittis nulla. Rapt Studio's work blurs the
            boundaries between space, brand and digital. I helped to define
            Rapt’s online content strategy and design a website showcasing over
            20 years of cutting edge work for Google, IBM Adobe and the likes.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      <div className="containerfour">
        <div className="left-content">
          <h1>Rapt Studio</h1>
          <p>
            Rapt Studio's work blurs the boundaries between space, brand and
            digital. I helped to define Rapt’s online content strategy and
            design a website showcasing over 20 years of cutting edge work for
            Google, IBM Adobe and the likes. Rapt Studio's work blurs the
            boundaries between space, brand and digital. I helped to define
            Rapt’s online content strategy and design a website showcasing over
            20 years of cutting edge work for Google, IBM Adobe and the likes.
            Rapt Studio's work blurs the boundaries between space, brand and
            digital. I helped to define Rapt’s online content strategy and
            design a website showcasing over 20 years of cutting edge work for
            Google, IBM Adobe and the likes.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="p_vis">
          <img src={mobilethreeImg} />
        </div>
      </div>

      <div className="containerfive">
        <div className="p_vis">
          <img src={mobilefiveImg} />
        </div>

        <div className="left-content">
          <h1>Rapt Studio</h1>
          <p>
            Rapt Studio's work blurs the boundaries between space, brand and
            digital. I helped to define Rapt’s online content strategy and
            design a website showcasing over 20 years of cutting edge work for
            Google, IBM Adobe and the likes. Rapt Studio's work blurs the
            boundaries between space, brand and digital. I helped to define
            Rapt’s online content strategy and design a website showcasing over
            20 years of cutting edge work for Google, IBM Adobe and the likes.
            Rapt Studio's work blurs the boundaries between space, brand and
            digital. I helped to define Rapt’s online content strategy and
            design a website showcasing over 20 years of cutting edge work for
            Google, IBM Adobe and the likes.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      <div className="achive">
        <h2>Archive —</h2>
      </div>

      <div className="imglast">
        <img src={mobilesixImg} />
      </div>

      <div className="lastintro">
        <h2>Writing — —</h2>

        <div className="abotme">
          <div className="abotmerow">
            {/* Left Column */}
            <h4>
              About — <br />
              <br />
              getting lost — 2016 <br />
              How to give people what <br />
              they want and not lose
              <br /> your soul — 2015 <br />
              Autonomous systems — 2013
            </h4>
            {/* Add your content here */}
            {/* Right Column */}
            <h4>
              Talks — <br /> <br />
              Jam — London 2015 <br />
              Datamates — London 2016
            </h4>
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
