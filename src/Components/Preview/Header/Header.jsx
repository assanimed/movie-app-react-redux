import React from "react";
import Search from "./Search";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 70px;
  box-shadow: 0 3px 3px -2px #856a6a;
  display: flex;
  align-items: center;
  padding-left: 50px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Search />
    </HeaderWrapper>
  );
}

export default Header;
