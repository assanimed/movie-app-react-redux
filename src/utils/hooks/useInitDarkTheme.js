import { useDispatch } from "react-redux";
import { initDarkTheme } from "../../store/ThemeSlice";

const useInitDarkTheme = () => {
  const dispatch = useDispatch();
  let isDark = false;
  /* verify the default user system pereferences  */
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) isDark = true;

  /* 
    check if the use set the dark theme in the localStorage to True, 
  */
  if (JSON.parse(window.localStorage.getItem("isDark"))) isDark = true;

  /* 
    we must evaluate the value against false, if not set it will return `null`
  */
  if (JSON.parse(window.localStorage.getItem("isDark")) === false)
    isDark = false;
  dispatch(initDarkTheme(isDark));
};

export default useInitDarkTheme;
