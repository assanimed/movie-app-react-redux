import SideBar from "../SideBar/SideBar";
import Header from "../Preview/Header/Header";
import styled from "styled-components";
import { Outlet } from "react-router";

const Preview = styled.div`
  flex-grow: 1;
  margin-left: 250px;
  box-sizing: border-box;
`;

function Main() {
  return (
    <div className="flex w-full">
      <SideBar />
      <Preview>
        <Header />
        <div className="p-3">
          <Outlet />
        </div>
      </Preview>
    </div>
  );
}

export default Main;
