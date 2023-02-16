import React from "react";
import styled from "styled-components";

interface Pacer {
  wd: string;
  tx: string;
}

const OrangeInvitationheader: React.FC<Pacer> = ({ wd, tx }) => {
  return (
    <div>
      <Container wd={wd}>
        <Wrapper>{tx}</Wrapper>
      </Container>
    </div>
  );
};

export default OrangeInvitationheader;

const Wrapper = styled.div`
  font-weight: 500;
  color: white;
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    font-size: 23px;
  }

  @media screen and (max-width: 350px) {
    font-size: 20px;
    width: 100%;
    height: 70px;
  }
`;

const Container = styled.div<{ wd: string }>`
  font-size: 30px;
  width: ${({ wd }) => wd};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;

  @media screen and (max-width: 960px) {
    width: 400px;
  }

  @media screen and (max-width: 390px) {
    width: 370px;
    font-size: 23px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;
