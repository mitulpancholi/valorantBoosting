import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/images/home/background.png";
import styled from "styled-components";
import jettImage from "../assets/images/home/home-jett.png";

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  max-height: 1920px;
  min-height: 49rem;
  background-image: url(${backgroundImage});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const StrokeSpan = styled.span`
  font-size: 290px;
  font-weight: 900;
  -webkit-text-stroke: 4px #ffffff;
  color: transparent;
  margin: 2px;
  opacity: 40%;
`;
const ManiacHeaderDiv = styled.div`
  padding-top: 60px;
  padding-left: 30px;
`;

const ManiacText = styled.div`
  z-index: 4;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &::after {
      content:"";
      display:block;
      position:relative;
      width:40%;
      height:4px;
      background-color:#FFF;
      top:-10px;
      left:3.85rem;
      opacity:40%;
  }
`;

const ImageJett = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  & > img {
    height:980px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`;

const BoostingWrapper = styled.div`
font-size:100px;
font-weight:900;
color: #FFF;
margin:0px 10px;
`

const Home = () => {
  return (
    <>
      <Navbar />

      <StyledSection>
        <ManiacHeaderDiv>
          {/* div for maniac text start */}
          <ManiacText>
            <StrokeSpan>M</StrokeSpan>
            <StrokeSpan>A</StrokeSpan>
            <StrokeSpan>N</StrokeSpan>
            <StrokeSpan>I</StrokeSpan>
            <StrokeSpan>A</StrokeSpan>
            <StrokeSpan>C</StrokeSpan>
            <StrokeSpan>'</StrokeSpan>
            <StrokeSpan>S</StrokeSpan>
          </ManiacText>
          {/* div for maniac text end */}

            <BoostingWrapper>
                BOOSTING SERVICE
            </BoostingWrapper>


            {/* absolute jett picture start */}
          <ImageJett>
            <img src={jettImage} alt="Jett-Valorant" />
          </ImageJett>
           {/* absolute jett picture end */}
        </ManiacHeaderDiv>
      </StyledSection>
    </>
  );
};

export default Home;
