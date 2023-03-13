import React from "react";
import styled from "styled-components";
import Build from "../card/Build";

const Homescreen = () => {
  return (
    <Body>
      <Wrap>
        <Build
          name="sedans"
          write="it takes monumental decision to change our live our live design is the best way for us change our self"
        />
        <Build
          name="sedans"
          write="it takes monumental decision to change our live our live design is the best way for us change our self"
        />
        <Build
          name="sedans"
          write="it takes monumental decision to change our live our live design is the best way for us change our self"
        />
      </Wrap>
    </Body>
  );
};
export default Homescreen;

const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 55%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
