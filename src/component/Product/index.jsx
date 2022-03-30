import React from "react";
import { product } from "../../mock/product";
import { Arrow, Card, Container, Wrapper } from "./style";

export const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Products by CP</Wrapper.Title>
        <Wrapper.TitleItem>Learn more {">"}</Wrapper.TitleItem>
      </Wrapper>
      <Wrapper card>
        {product.map((value) => {
          return (
            <Card key={value.id}>
              <Card.Flexing>
                <Card.Header>{value.header}</Card.Header>
                <Arrow />
              </Card.Flexing>

              <Card.Text>{value.text}</Card.Text>
            </Card>
          );
        })}
      </Wrapper>
      <Container.Title>
        The entire ecosystem of CREATE PROTOCOL is a spiderweb: interlinked
        DApps that power each other, where the Protocol is the engine.
      </Container.Title>
      <Container.Btn>Learn more</Container.Btn>
    </Container>
  );
};

export default Product;
