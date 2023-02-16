import React from "react";
import styled from "styled-components";

interface Pacer {
  src: any;
  iconwd: string;
  iconpd: string;
  iconmg: string;
  tx: string;
  cl: string;
  pd: string;
  bg: string;
  wd: string;
  mg: string;
  ht: string;
  fw: string;
  br: string;
  icondp: string;
}

const UploadImageBtn: React.FC<Pacer> = ({
  src,
  iconwd,
  tx,
  iconpd,
  iconmg,
  cl,
  wd,
  mg,
  bg,
  pd,
  ht,
  fw,
  br,
  icondp,
}) => {
  return (
    <div>
      <Container ht={ht} wd={wd} cl={cl} mg={mg} pd={pd} bg={bg} br={br}>
        <Text fw={fw}>{tx}</Text>
        <Icon
          src={src}
          iconwd={iconwd}
          iconmg={iconmg}
          iconpd={iconpd}
          icondp={icondp}
        />
      </Container>
    </div>
  );
};

export default UploadImageBtn;

const Icon = styled.img<{
  iconwd: string;
  iconmg: string;
  iconpd: string;
  icondp: string;
}>`
  width: ${(props) => props.iconwd};
  margin: ${(props) => props.iconmg};
  padding: ${(props) => props.iconpd};
  display: ${(props) => props.icondp};

  @media screen and (max-width: 790px) {
    width: 25px;
  }

  @media screen and (max-width: 425px) {
    width: 23px;
  }

  @media screen and (max-width: 380px) {
    width: 17px;
  }

  @media screen and (max-width: 325px) {
    width: 20px;
  }
`;

const Text = styled.div<{ fw: string }>`
  font-size: 30px;
  font-weight: ${(props) => props.fw};

  @media screen and (max-width: 790px) {
    font-size: 25px;
  }
  @media screen and (max-width: 425px) {
    font-size: 23px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
  @media screen and (max-width: 325px) {
    font-size: 17px;
  }
`;

const Container = styled.div<{
  wd: string;
  mg: string;
  pd: string;
  bg: string;
  cl: string;
  br: string;
  ht: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.wd};
  height: ${(props) => props.ht};
  margin: ${(props) => props.mg};
  padding: ${(props) => props.pd};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  border-radius: ${(props) => props.br};
  cursor: pointer;

  width: 370px;

  @media screen and (max-width: 960px) {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 485px) {
    width: 270px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 380px) {
    width: 230px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 325px) {
    width: 200px;
    display: flex;
    justify-content: center;
  }
`;
