import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  width: 250px;
  min-width: 250px;
  height: calc(100vh - 70px);
  /*box-shadow: 3px -1px 7px #856a6a;*/
  position: relative;
  z-index: 20;
`;

const MenuOrch = styled.div`
  width: inherit;
  height: inherit;
  padding-top: 30px;
  position: fixed;
`;

export default function SideBar({ children }) {
  return (
    <Wrapper className="hidden md:block">
      <MenuOrch className="bg-[#3b27ab] dark:bg-[#211469]">
        {/* <NavMenu /> */}
        {children}
      </MenuOrch>
    </Wrapper>
  );
}
