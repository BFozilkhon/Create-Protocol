import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

Wrapper.Title = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 136.02%;
  text-align: center;
  color: #ffffff;
`;

Wrapper.TitleItem = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 136.02%;
  text-align: center;
  color: #cbd5e0;
`;

export const Card = styled.div`
  width: 290px;
  padding-bottom: 10px;
  margin: 20px 0px;
`;

Card.ImgCon = styled.div`
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(224, 249, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 64.58%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  filter: drop-shadow(2px 16px 19px rgba(0, 0, 0, 0.09));
  backdrop-filter: blur(80px);
  border-radius: 12px;
  width: 100%;
  height: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #4c6fff;
  margin-bottom: 19px;
`;

Card.Img = styled.img``;

Card.Header = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: ${({ light }) => (light ? "#718096" : "#eaeef6")};
`;

Card.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  font-feature-settings: "salt" on;
  color: #a6b7d4;
  margin-top: 16px;
`;
