import React from "react";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
import "../styles/main.css";

const Main = () => {
  let options = {
    activeClass:  'active',
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true,
  };
  return (
    <div>
      <Header>
        <a href="#sectionOne">Intro</a>
        <a href="#sectionTwo">Our Services</a>
        <a href="#sectionThree">About Us</a>
        <a href="#sectionFour">Contact</a>
      </Header>

      <SectionsContainer className="container" {...options}>
        <Section
          className="custom-section bg"
          verticalAlign="true"
        
        >
          Page 1
        </Section>
        <Section className="bg" >Page 2</Section>
        <Section className="bg">Page 3</Section>
        <Section className="bg">Page 4</Section>
      </SectionsContainer>
    </div>
  );
};

export default Main;
