import React, {useEffect} from "react";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <MenuBtn />
      <Wrapper>
        <Container>
          <Heading>ABOUT US</Heading>
          <ImageContainer>
            <Image src="img/aboutus.jpg"></Image>
          </ImageContainer>
          <AboutContainer>
            <Heading>INVERTIS UNIVERSITY</Heading>
            <Content>
              Invertis is a leading
              University offering a wide range of courses pertaining to
              different fields of study. It is situated on the Bareilly-Lucknow
              NH-24 highway,equidistant from New Delhi,the capital of the
              country and the state capital Lucknow. From a humble beginning in
              1998, with one Institute namely Invertis Institute of Management
              Studies with a strength of 83 students, it has emerged as a
              full-fledged University with nine Institutes and more than 6000
              students under its name. Invertis offers Doctoral, Post Graduate
              and Under Graduate programmes in Management, Computer
              Applications, Engineering, Architecture, Applied Science,
              Humanities, Law, Pharmacy, Journalism, Mass Communication, Fashion
              Design, Agriculture and Education along with Diploma programmes in
              Engineering and Pharmacy courses. At Invertis, we believe that the
              success of the University comes from the achievement of its
              students. To ensure that our students succeed in all their
              endeavours, Invertis has created a rich knowledge resource pool.
              Our faculty members are highly educated and qualified from premier
              Institutions of the country. They are the scientists, researchers,
              trainers who work as facilitators for the growth and development
              of the students. Our faculty members foster knowledge and skills
              in the students to prepare them to meet the challenges of the
              professional world. “Holistic Development” is the key factor of
              our learning modules as we focus on an all-round development of
              our students through Personality Grooming classes, Communication
              Skills workshops, Sports activities, Musical concerts, Fashion
              shows and Cultural programs etc. We believe in learning beyond the
              classroom, therefore, Industry visits, Internships,
              Industry-Institute Interface programs, Educational tours are
              regular features of our curriculum. Our syllabi are designed with
              expert advice from eminent personalities belonging to the industry
              and the Corporate Sector to cater to the current industry needs.
              Our Corporate Resource Centre works for the best placements of our
              students in diversified fields. Our Alumni are working at top
              notch positions in the country as well as abroad. Our students get
              an opportunity to study abroad under our Students Exchange
              Programs in collaboration with Living Stone College, South
              Carolina, USA and North Carolina University. With a magnificent
              campus, world class infrastructure, well equipped engineering,
              computer and language labs, a number of seminar halls with a grand
              auditorium along with a history of the best placements and
              remarkable achievements in other fields, Invertis University
              offers a promising future to its students.
            </Content>
          </AboutContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  min-height: 100vh;
  background: url("/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 70px 0 30px 0;
`;

const Container = styled.div`
  margin: 30px 100px;
  color: #ffff;
  @media screen and (max-width: 900px) {
    margin: 30px 50px;
  }
  @media screen and (max-width: 450px) {
    margin: 30px 15px;
  }
`;
const Heading = styled.h1`
  text-align: center;
  width: fit-content;
  margin: auto;
  font-family: "Carter One", cursive;
  letter-spacing: 4px;
  font-size: 5em;
  font-weight: 900;
  -webkit-text-stroke: 2px #ffff;
  color: rgba(255, 255, 255, 0.3);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 3px;
    border-radius: 3px;
    left: 0;
    right: 0;
    background: #fff;
    bottom: 0px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 4em;
  }

  @media screen and (max-width: 750px) {
    font-size: 3em;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.5em;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
`;
const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  padding: 50px;
  border: 2px solid white;
  margin-top: 30px;
  z-index: 1;
  background: url("/img/about.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 20px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
    z-index: -1;
    border-radius: 20px;
  }

  @media screen and (max-width: 750px) {
    font-size: 1em;
    padding: 30px;

  }

  @media screen and (max-width: 450px) {
    font-size: 0.7em;
    padding: 15px;
  }
`;
const Content = styled.p`
font-size: 1.2em;
  text-align: justify;
  line-height: 2em;
  color:#fff;
  margin-top: 20px;

  @media screen and (max-width: 750px) {
    font-size: 1.05em;
  }

  @media screen and (max-width: 450px) {
    font-size: 1em;
  }
`;
