import React from "react";
import Navbar from "../Navbar";
import { Container, Flexing, Header, Img, Text } from "./style";

export const Opener = () => {
  return (
    <Container>
      <Navbar />

      <Container.Wrap>
        <Container.Box>
          <Header>Creativity Decentralised</Header>
          <Text>First Decentralized Create To Earn Economy</Text>
          <Flexing>
            <Flexing.Circle />
            <Flexing.Item>Decentralized Creations</Flexing.Item>
          </Flexing>
          <Flexing>
            <Flexing.Circle />
            <Flexing.Item>Suite of API’s and smart contracts.</Flexing.Item>
          </Flexing>
          <Flexing>
            <Flexing.Circle />
            <Flexing.Item>The CREATE REVOLUTION</Flexing.Item>
          </Flexing>
          <Flexing>
            <Flexing.Btn chap>Buy CR8 Token</Flexing.Btn>
            <Flexing.Btn>join community</Flexing.Btn>
          </Flexing>
        </Container.Box>
        <Img />
      </Container.Wrap>
    </Container>
  );
};

export default Opener;
