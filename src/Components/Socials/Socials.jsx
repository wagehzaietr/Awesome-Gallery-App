import React from "react";
import Github from "../../images/github.png";
import Insta from "../../images/instagram.png";
import { SocialWrapper, Container } from "./Socials.Style";

const Socials = () => {
  return (
    <SocialWrapper>
      <Container>
        <a href="https://github.com/wagehzaietr" target="_blank"><img src={Github} alt="" /></a>
        <p>Awesome Gallery</p>
      </Container>
    </SocialWrapper>
  );
};

export default Socials;
