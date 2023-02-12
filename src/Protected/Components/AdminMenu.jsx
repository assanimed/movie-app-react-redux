import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";

const NavWrapper = styled.nav`
  height: 100%;
  width: 100%;
  li {
    text-align: center;
  }
  a {
    display: block;
    padding: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:hover {
      transform: unset;
    }
  }
`;

const LogoutLink = styled.ul`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  jusfity-content: center;
  li {
    width: inherit;
    display: flex;
    justify-content: center;
  }
  a {
    width: 80%;
    background-color: #c464cd;
    border-radius: 10px;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05, 1.05);
      border-radius: 10px;
    }
  }
`;

function AdminMenu() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/movies">Movies</Link>
        </li>
        <li>
          <Link to="/dashboard/users">Users</Link>
        </li>
      </ul>
      <LogoutLink>
        <li>
          <Link to="/logout">
            <BiLogOut /> Logout
          </Link>
        </li>
      </LogoutLink>
    </NavWrapper>
  );
}

export default AdminMenu;
