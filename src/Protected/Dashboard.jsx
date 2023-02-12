import { useEffect } from "react";
import { createPortal } from "react-dom";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { Preview } from "../Pages/Main";
import AdminMenu from "./Components/AdminMenu";
import { Outlet, useNavigate } from "react-router";
import BackDrop from "../Components/ui/BackDrop";
import { useSelector } from "react-redux";
import Details from "../Components/ui/Details";

function Dashboard() {
  const { isOpen, target } = useSelector((state) => state.Modal);
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) Navigate("/login");
  }, [isAuth]);

  return (
    <div>
      {isOpen &&
        target === 2 &&
        createPortal(
          <BackDrop>
            <Details />
          </BackDrop>,
          document.querySelector("#modalPreview")
        )}
      <main className="flex dark:bg-[#1B2430] dark:text-[#E7F6F2]">
        <Preview>
          <div
            className="p-3"
            style={{
              minHeight: "calc(100vh - 70px)",
            }}
          >
            <Outlet />
          </div>
        </Preview>
      </main>
    </div>
  );
}

export default Dashboard;
