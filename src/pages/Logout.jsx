import { useEffect } from "react";
import Header from "../Components/Header/Header";
import useAuth from "../utils/hooks/useAuth";
import { useNavigate } from "react-router";
import { HiDocumentChartBar } from "react-icons/hi2";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const logOutProcess = async () => {
      await logout();
      document.cookie = "ma_at= ;max-age=-1";
      document.cookie = `last_login= ;max-age=-1`;
      navigate("/");
    };
    logOutProcess();
  }, []);
  return (
    <div>
      <Header />
      <main className="py-3 flex justify-center">Loggin out ...</main>
    </div>
  );
}

export default Logout;
