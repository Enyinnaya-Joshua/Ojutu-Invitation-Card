import React from "react";
import styled from "styled-components";
import vid1 from "../Assets/Tech-video.mp4";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <video autoPlay={true} loop playsInline src={vid1} />
          <Text>
            <strong>CODELAB SET 06 TECH CONFERENCE</strong> Come and Feel the
            true impact of information technology. An event where different
            solution softwares will be launched.
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Text = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  width: 50%;
  font-size: 30px;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    font-size: 20px;
    font-weight: 400;
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    font-size: 17px;
    font-weight: 400;
    width: 90%;
  }
`;

const Wrapper = styled.div`
  video {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  width: 90%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-top: 100px;
`;
