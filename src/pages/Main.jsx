import SideBar from "../Components/SideBar/SideBar";
import Header from "../Components/Header/Header";
import styled from "styled-components";
import { Outlet } from "react-router";
import NavMenu from "../Components/SideBar/NavMenu";
import Footer from "../Components/Footer/Footer";

const Preview = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

function Main() {
  return (
    <div className="dark:bg-[#1B2430] dark:text-white">
      <Header />
      <main className="flex">
        <SideBar>
          <NavMenu />
        </SideBar>
        <Preview>
          <div className="p-3" style={{ minHeight: "calc(100vh - 110px)" }}>
            <Outlet />
          </div>
          <Footer />
        </Preview>
      </main>
    </div>
  );
}

export default Main;
export { Preview };
