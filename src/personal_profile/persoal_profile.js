import { Component } from "react";
import "../personal_profile/personal_profile.css";
export default class PersonalProfile extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="first-section">
          <img
            className="top-cloud"
            src={require("../images/cloud.png")}
            alt="cloud"
          ></img>
          <p className="first-section-title"> Ayman Omara</p>
          <p className="first-section-sub-title"> Ayman Omara</p>
          <img
            className="bottom-cloud"
            src={require("../images/cloud.png")}
            alt="cloud"
          ></img>
          <img src={require("../images/mountain.png")} alt="cloud"></img>
        </div>
        <div className="second-section">
          <img
            className="personal-img"
            src={require("../images/personal-pic.jpeg")}
          ></img>
          <p className="second-section-title">Hello</p>
          <p className="second-section-sub-title">
            i am an IOS and web depeloper also android and flutter i ❤️ coffe{" "}
          </p>
          <hr className="new3" />
        </div>
        <div className="third-section">
          <p className="third-section-title"> My Skills</p>
          <div className="first-skill-container">
            <img
              className="skill-image-left"
              src={require("../images/computer.png")}
            ></img>
            <p className="third-section-skill-name"> Desgin & Developemnt</p>
            <p className="third-section-skill-discription">
              I Started learning Developemnt scince i was 12 years old till now
              because i want to create my websites and mobile apps over the 13
              years i gainnd a lot of experiance i built till now 7 projects for
              android ios and web and desktop app.
            </p>
          </div>
          <div className="first-skill-container">
            <img
              className="skill-image-right"
              src={require("../images/computer.png")}
            ></img>
            <p className="third-section-skill-name"> Desgin & Developemnt</p>
            <p className="third-section-skill-discription">
              I Started learning Developemnt scince i was 12 years old till now
              because i want to create my websites and mobile apps over the 13
              years i gainnd a lot of experiance i built till now 7 projects for
              android ios and web and desktop app.
            </p>
          </div>
        </div>
        <hr className="new3" />
        <div className="">
          <p className="contact-section-title">Get in Touch</p>
          <p className="contact-section-sub-title">
            if you would like to call me
          </p>
          <button className="contact-me-btn">Contact me</button>
        </div>
        <div className="footer">
          <a className="footer-contact-items" href="">
            {" "}
            facebook
          </a>
          <a className="footer-contact-items" href="">
            {" "}
            linkedin
          </a>
          <a className="footer-contact-items" href="">
            {" "}
            twitter
          </a>
          <p className="footer-rights"> all rights reserved for ayman</p>
        </div>
      </div>
    );
  }
}
