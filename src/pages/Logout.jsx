import { useEffect } from "react";
import Header from "../Components/Header/Header";
import useAuth from "../utils/hooks/useAuth";
import { useNavigate } from "react-router";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const logOutProcess = async () => {
      await logout();
      navigate("/");
    };
    logOutProcess();
  }, []);
  return (
    <div>
      <main className="py-3 flex justify-center">Loggin out ...</main>
    </div>
  );
}

export default Logout;
