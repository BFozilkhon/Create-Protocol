import styled from "styled-components";
import background from "../../assets/imgs/background.png";
import flexImg from "../../assets/imgs/opener.png";

export const Container = styled.div`
  background-image: linear-gradient(
      282.91deg,
      rgba(76, 111, 255, 0.294) -6.88%,
      rgba(143, 47, 255, 0.183) 77.43%
    ),
    url(${background});
  background-size: 100% 100%;
  width: 100%;
  height: 91.5vh;
`;

Container.Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;

Container.Box = styled.div`
  flex: 3;
`;

export const Header = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 800;
  font-size: 88.6932px;
  line-height: 110px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-shadow: 3px 2px 7px #000000;
`;

export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 29.7077px;
  line-height: 45px;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

Flexing.Circle = styled.div`
  background: #8f2fff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 20px;
`;

Flexing.Item = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #e4ecf7;
`;

Flexing.Btn = styled.div`
  width: 210px;
  height: 50px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  justify-content: center;
  margin-top: 30px;
  background: ${({ chap }) => (chap ? "#4c6fff" : "none")};
  margin-right: ${({ chap }) => chap && "45px"};
  border: ${({ chap }) => !chap && "2px solid #f5f5f5"};
  :hover {
    background: #4c6fff;
    border: none;
  }
  :active {
    transform: scale(0.99);
  }
`;

export const Img = styled.div`
  background-image: linear-gradient(
      282.91deg,
      rgba(76, 111, 255, 0.294) -6.88%,
      rgba(143, 47, 255, 0.183) 77.43%
    ),
    url(${flexImg});
  background-size: 100% 100%;
  flex: 2;
  height: 436px;
  border-radius: 33.907px;
`;
