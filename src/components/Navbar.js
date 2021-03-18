import React from "react";
import styled from "styled-components";
import backArrow from "../assets/images/home/Union.png"

const NavbarWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:0;
  left:0;
  z-index:5;
`;
const NavHead = styled.nav`
  width: 739px;
  height: 40px;
  justify-content: space-between;
  display: flex;
  & > a {
    font-size: 30px;
    text-decoration: none;
    color: #B8B9BD;
  }
`;

const NavSpan = styled.span`
margin: 3px 10px;
color: #B8B9BD;
font-size:24px;
`

const BackButton = styled.div`
position:absolute;
top:40px;
left:20px;
color:white;
display:flex;
justify-content:center;
align-items:center;
`

// const GoBackText = styled.span`
// font-size:16px;
// color:white;
// margin-left:5px;
// `
const Navbar = () => {
  return (
    <>
    

    
      <NavbarWrapper>
        <NavHead>
          <a href="/html/">HOME</a>
          <NavSpan>|</NavSpan>
          <a href="/css/">VOUCHES</a>
          <NavSpan>|</NavSpan>
          <a href="/js/">OUR PLANS</a>
          <NavSpan>|</NavSpan>
        <a href="/python/">CONTACT US</a>
        </NavHead>
        <BackButton>
            {/* <div>
                <img src={backArrow} alt="Back Arrow"></img>
            </div> */}
            {/* <GoBackText>
                GO BACK
            </GoBackText> */}
        </BackButton>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
