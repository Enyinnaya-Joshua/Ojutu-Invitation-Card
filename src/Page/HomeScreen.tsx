import React from "react";
import Hero from "../Comps/Hero";
import InvitationcardCreation from "../Comps/InvitationcardCreation";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Hero />
        <InvitationcardCreation />
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 10px;
`;
