import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow-right.svg";
export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: ${({ card }) => !card && "center"};
  margin-bottom: ${({ card }) => !card && "49px"};
  justify-content: space-between;
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
  width: 30%;
  padding: 20px;
  :hover {
    box-shadow: 0px 5px 10px black;
    transform: scale(1.03);
  }
`;

Card.Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

Card.Header = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 136.02%;
  color: #ffffff;
`;

export const Arrow = styled(arrow)``;

Card.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 136.02%;
  color: #cbd5e0;
  width: 90%;
  margin-top: 22px;
`;

Container.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 136.52%;
  text-align: center;
  color: #ffffff;
  width: 46%;
  margin-top: 60px;
`;

Container.Btn = styled.div`
  background: #4c6fff;
  height: 49px;
  width: 210px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  cursor: pointer;
  :active {
    transform: scale(0.99);
  }
`;
