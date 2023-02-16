import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Text>© 2022 OJUTU. All Right Revered</Text>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Text = styled.div`
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 100%;
  background-color: black;
`;
