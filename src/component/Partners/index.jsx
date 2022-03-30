import React from "react";
import { data } from "../../mock/card";
import { Card, Container, Wrapper } from "./style";

export const Partners = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Partners & Investors</Wrapper.Title>
        <Wrapper.TitleItem>Learn more {">"}</Wrapper.TitleItem>
      </Wrapper>
      <Wrapper>
        {data?.map((value) => {
          return (
            <Card key={value.id}>
              <Card.ImgCon>
                <Card.Img src={value.url} alt="img" />
              </Card.ImgCon>
              <Card.Header>
                {value.id} {value.headerBlack}
              </Card.Header>
              <Card.Header light>{value.headerLight}</Card.Header>
              <Card.Text>{value.text}</Card.Text>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Partners;
