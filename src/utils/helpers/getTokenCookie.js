const getTokenCookie = () =>
  document.cookie
    .split("; ")
    .find((item) => item.startsWith("ma_at"))
    ?.split("=")[1];

export default getTokenCookie;
