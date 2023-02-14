import React from "react";
import { useSelector } from "react-redux";

function AdminWelcome() {
  const username = useSelector((state) => state?.auth?.user?.username);
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl my-3">👋 Hi! {username}</h1>{" "}
      </div>
    </div>
  );
}

export default AdminWelcome;
