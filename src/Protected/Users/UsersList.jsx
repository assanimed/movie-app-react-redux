import { useSelector, useDispatch } from "react-redux";

import { useGetUsersQuery } from "../../features/user/usersApiSlice";

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

const UsersList = () => {
  const dispatch = useDispatch();

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  const { isOpen, target } = useSelector((state) => state.modal);

  const handleDeleteClick = async (info) => {
    dispatch(setTarget(4));
    dispatch(setModalStatus(true));
    dispatch(setModalUser(info));
  };

  if (isError) return <h2>Failed to Load Users!</h2>;

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      {isOpen &&
        target === 4 &&
        createPortal(
          <BackDrop>
            <Details />
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
                          onClick={() =>
                            handleDeleteClick({ id, username, email })
                          }
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
