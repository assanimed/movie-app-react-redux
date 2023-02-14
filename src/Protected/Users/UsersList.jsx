import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUsers } from "../../features/user/UsersSlice";

import getUsers from "../../api/user/getUsers";
import { AiFillDelete } from "react-icons/ai";
import styles from "./UsersList.module.scss";

import {
  setTarget,
  setModalStatus,
  setModalUser,
} from "../../features/modal/modalSlice";
import BackDrop from "../../Components/ui/BackDrop";
import { createPortal } from "react-dom";
import Details from "../../Components/ui/Details";
import { getUser } from "../../api/user/getUser";
import { useNavigate } from "react-router";
import deleteUser from "../../api/user/deleteUser";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.Users.users);
  const user = useSelector((state) => state.modal.user);
  const authUser = useSelector((state) => state.auth.user);
  const { isOpen, target } = useSelector((state) => state.modal);

  const handleDeleteClick = async (id) => {
    dispatch(setTarget(4));
    dispatch(setModalStatus(true));
    const data = await getUser(id);
    dispatch(setModalUser(data));
  };
  const clearModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalUser(null));
    dispatch(setTarget(0));
  };

  const handleCancel = () => clearModal();

  const handlefirmation = async () => {
    await deleteUser(user.id);
    setTimeout(clearModal, 200);
    if (authUser.id === user.id) navigate("/logout");
  };

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      const usersSet = users?.data ? users?.data : users;
      console.log("usersSet -> ", usersSet);
      dispatch(setUsers(usersSet));
    })();
    return () => dispatch(setUsers([]));
  }, [user]);

  return (
    <>
      {isOpen &&
        target === 4 &&
        createPortal(
          <BackDrop>
            <Details
              handleConfButton={handlefirmation}
              onCancel={handleCancel}
            />
          </BackDrop>,
          document.querySelector("#modalPreview")
        )}
      <div className="px-3 py-5">
        <table className={`w-full max-w-xl mx-auto ${styles.Userstable}`}>
          <thead>
            <tr>
              <th className="py-2 text-xs md:text-sm">ID</th>
              <th className="py-2 text-xs md:text-sm">Username</th>
              <th className="py-2 text-xs md:text-sm">Email</th>
              {users && users.length > 1 && (
                <th className="py-2 text-xs md:text-sm"></th>
              )}
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(({ id, username, email }) => (
                <tr
                  key={username}
                  className="text-center text-sm dark:text-white text-indigo-900"
                >
                  <td>{id}</td>
                  <td className="text-xs md:text-sm">{username}</td>
                  <td className="text-xs md:text-sm">{email}</td>
                  {users.length > 1 && (
                    <td className="px-2 ">
                      <div className="flex justify-center">
                        <AiFillDelete
                          className="hover:text-indigo-400 cursor-pointer "
                          onClick={() => handleDeleteClick(id)}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersList;
