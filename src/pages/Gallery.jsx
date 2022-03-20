import React, { Component } from "react";
import Slider from "react-slick";
import "./gallery.css";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";
import photos from "../data/GalleryData";

export default class AutoPlay extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <MenuBtn />
        <Wrapper>
          <Container>
            <Heading>GALLERY</Heading>
            <PhotoContainer>
              <Slider {...settings}>
                {photos.map((photo) => {
                  return (
                    <>
                      <div className="card">
                        <img src={photo.image} />
                      </div>
                    </>
                  );
                })}
              </Slider>
            </PhotoContainer>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: url("/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 70px 20px 30px 20px;
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
  color: rgba(0, 0, 0, 0.6);
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

const PhotoContainer = styled.div`
  margin-top: 30px;
  border-radius: 10px;
`;
