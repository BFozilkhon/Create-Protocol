import React from "react";
import { Container, Logo, NavItems } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Logo />
      <NavItems>
        <NavItems.Text>Home</NavItems.Text>
        <NavItems.Text>Developer</NavItems.Text>
        <NavItems.Text>Creator</NavItems.Text>
        <NavItems.Text>Ecosystem</NavItems.Text>
        <NavItems.Text>About us</NavItems.Text>
        <NavItems.Text>Resources</NavItems.Text>
        <NavItems.Btn>Whitepaper</NavItems.Btn>
      </NavItems>
    </Container>
  );
};

export default Navbar;
