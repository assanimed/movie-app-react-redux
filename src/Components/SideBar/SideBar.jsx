import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 250px;
  height: 100vh;
  background: #3b27ab;
  box-shadow: 3px -1px 7px #856a6a;
  position: fixed;
  z-index: 120;
`;

export default function SideBar() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <NavMenu />
    </Wrapper>
  );
}
