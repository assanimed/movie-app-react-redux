import { useEffect } from "react";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router";
import { HiDocumentChartBar } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { unsetUser } from "../features/auth/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const logOutProcess = async () => {
      await dispatch(unsetUser());
      document.cookie = "ma_at= ;max-age=-1";
      document.cookie = `last_in= ;max-age=-1`;
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
