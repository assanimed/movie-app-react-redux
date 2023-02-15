import { useDispatch, useSelector } from "react-redux";
import {
  setModalUser,
  setModalStatus,
  setTarget,
} from "../../features/modal/modalSlice";

import { useDeleteUserMutation } from "../../features/user/usersApiSlice";
import { useNavigate } from "react-router";

const UserDetailsModal = ({ handleCancel, id, username }) => {
  const navigate = useNavigate();
  const authUserID = useSelector((state) => state.auth.user.id);

  const [deleteUser, { isLoading, isError, error }] = useDeleteUserMutation();
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    await deleteUser(id);
    setTimeout(() => {
      dispatch(setModalStatus(false));
      dispatch(setModalUser(null));
      dispatch(setTarget(0));
      if (authUserID === id) navigate("/logout");
    }, 200);
  };

  return (
    <>
      <div className="my-2 py-2 bg-slate-100 p-2">
        <div>
          Id 👉 <span className=" text-indigo-500 text-xl">{id}</span>
        </div>
        <div>
          Username 👉{" "}
          <span className=" text-indigo-500 text-xl">{username}</span>
        </div>
      </div>
      <div className="flex justify-around my-5">
        <button
          className="px-5 py-2 rounded text-white bg-indigo-900"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="px-5 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-800 duration-150"
        >
          {isLoading ? "..." : "Confirm"}
        </button>
      </div>
    </>
  );
};

export default UserDetailsModal;
