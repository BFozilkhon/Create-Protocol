import styled from "styled-components";

export const Card = styled.div`
  width: 400px;
  padding: 20px 10px;
`;

Card.Img = styled.img`
  margin-bottom: 30px;
`;

Card.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 25px;
  color: #eaeef6;
`;

Card.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 136.52%;
  color: #ffffff;
  margin: 18px 0px 22px 0px;
`;

Card.Btn = styled.div`
  border: 1px solid #f5f5f5;
  width: 220px;
  box-sizing: content-box;
  padding: 0px 10px;
  height: 49px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: #4c6fff;
    border: 1px solid #4c6fff;
  }
  :active {
    transform: scale(0.98);
  }
`;
