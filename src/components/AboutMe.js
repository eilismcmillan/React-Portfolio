import ProfilePic from '../images/profilepic.png'

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={ProfilePic} alt="an image of myself" id='profile-img'></img>
      <p id='about-text'>
        Hi, I am Eilís! I recently graduated from Monash University with degrees
        in Marketing Science and International Studies. I am currently learning
        to code in the hopes of expanding my practical skills, and opening new
        potential career paths.
      </p>
      <section class="links">
        <a href="#" target="_blank">
          <i class="fa"> <BsGithub/></i>
        </a>
        <a href="#" target="_blank">
          <i class="fa"> <BsLinkedin /> </i>
        </a>
        <a href="#" target="_blank">
          <i class="fa"> <BsInstagram /> </i>
        </a>
      </section>
    </div>
  );
}

export default AboutMe;
