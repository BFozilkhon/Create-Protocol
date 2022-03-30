import styled from "styled-components";
import aboutImg from "../../assets/imgs/about.png";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;

Wrap.Box = styled.div`
  flex: 2;
  margin-right: 160px;
`;

Wrap.Header = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 25px;
`;

Wrap.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 136.52%;
  color: #ffffff;
  width: 90%;
`;

export const Img = styled.div`
  background-image: url(${aboutImg});
  background-size: 100% 100%;
  flex: 1;
  height: 479px;
  border-radius: 33.907px;
`;
