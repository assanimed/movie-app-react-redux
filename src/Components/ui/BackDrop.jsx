import React from "react";
import styled from "styled-components";

import useLockBodyScroll from "../../utils/hooks/useLockBodyScroll";
import { GiVikingLonghouse } from "react-icons/gi";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: ${({ bg }) => bg ?? "#2c2926c4"};
  z-index: 200;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const BackDrop = ({ bg, children }) => {
  useLockBodyScroll();
  return <Modal bg={bg}>{children}</Modal>;
};

export default BackDrop;
