import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Not yet have a good Home Page as I Imagined 😭
    navigate("/all");
  }, []);

  return <div style={{ minHeight: "calc(100vh - 135px)" }}>Home</div>;
}

export default Home;
