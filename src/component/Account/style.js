import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: ${({ main }) => main && "end"};
`;

Container.Header = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 136.02%;
  color: #ffffff;
`;

Container.Hr = styled.div`
  border: 1px solid #f5f5f5;
  height: 170px;
  margin: 0px 30px;
`;

Container.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 136.52%;
  color: #ffffff;
  width: 20%;
  align-self: start;
  margin-top: 30px;
  margin-right: 100px;
`;
