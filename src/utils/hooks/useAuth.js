import { useDispatch } from "react-redux";
import { setUser, unsetUser, setAuthError } from "../../store/AuthSlice";
import { AxiosInstance } from "../../api/AxiosInstance";

const useAuth = () => {
  const dispatch = useDispatch();
  const login = async (username, password) => {
    try {
      const { data } = await AxiosInstance.post("/auth/local", {
        identifier: username,
        password: password,
      });
      document.cookie = `ma_at=${data.jwt};SameSite=Lax`;
      document.cookie = `last_login=${new Date()};SameSite=Lax`;

      dispatch(
        setUser({
          user: { ...data.user },
        })
      );
      dispatch(setAuthError(false));
    } catch (e) {
      if (e.response.status === 400)
        dispatch(setAuthError("Login Credentials are not Valid"));
      else dispatch(setAuthError("Internal server error, Try Again Later"));
      setTimeout(dispatch, 4950, setAuthError(null));
    }
  };

  const logout = () => {
    dispatch(unsetUser());
  };
  return { login, logout };
};

export default useAuth;
