import React from "react";
import AddButton from "../../Components/ui/AddButton";
import UsersList from "./UsersList";

function Users() {
  return (
    <div>
      <AddButton text="Add User" />
      <UsersList />
    </div>
  );
}

export default Users;
