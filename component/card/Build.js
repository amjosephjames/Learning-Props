import React from "react";
import styled from "styled-components";
import avr from "../images/petun.jpg";

const Build = ({ name, write }) => {
  return (
    <Container>
      <Wrapper>
        <Logo alt="pdf" src={avr} />
        <Title>{name}</Title>
        <Content>{write}</Content>
        <Button>learn more</Button>
      </Wrapper>
    </Container>
  );
};
export default Build;

const Container = styled.div`
  width: 350px;
  height: 500px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const Title = styled.div`
  font-size: 30px;

  font-weight: bold;
`;
const Content = styled.div`
  color: white;
  font-size: 18px;
  width: 250px;
  line-height: 1.5;
  /* margin-top: 30px; */
`;
const Button = styled.div`
  height: 30px;
  width: 130px;
  border-radius: 15px;
  background: white;
  /* margin: 30px; */
  /* margin-top: 100px; */
  text-align: center;
  padding-top: 18px;
  color: black;
  font-size: 15px;
  padding-bottom: 5px;
`;
