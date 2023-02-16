import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo to={"/"}>OJUTU.</Logo>
          <GetInvitationCard>Get Invitation Card</GetInvitationCard>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const GetInvitationCard = styled.div`
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;

const Logo = styled(NavLink)`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  position: fixed;
  z-index: 10;
  box-shadow: 1px 2px 10px 1px rgba(20, 20, 20, 0.4);
`;
