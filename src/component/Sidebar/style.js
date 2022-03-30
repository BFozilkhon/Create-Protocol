import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #4c6fff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
`;

Container.Button = styled.div`
  border: 1px solid #f5f5f5;
  width: 163px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 30px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #4c6fff;
  }
  :active {
    transform: scale(0.99);
  }
`;
