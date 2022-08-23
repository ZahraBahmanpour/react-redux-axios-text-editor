import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { closeTab } from "../../redux/features/tab/tabsSlice";
import SaveModal from "../modal/Modal";
import { useDispatch } from "react-redux";
import useDialog from "../../hooks/useDialog";

export default function TabHeader({ title, id, unSaved }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, handleClickOpen, handleClose] = useDialog();
  const clickHandler = () => {
    navigate(`/${id}`);
  };
  const closeHandler = (e) => {
    dispatch(closeTab({ id }));
    e.stopPropagation();
  };
  return (
    <>
      {isModalOpen && (
        <SaveModal
          show={isModalOpen}
          handleCancel={handleClose}
          handleOk={closeHandler}
          message={"You have unsaved changes. Do you want to exit?"}
        />
      )}
      <div
        onClick={clickHandler}
        style={{ color: unSaved ? "red" : "inherit" }}
      >
        {title.slice(0, 10)}...
        <IoCloseSharp
          className="text-danger"
          onClick={(e) => (unSaved ? handleClickOpen(e) : closeHandler(e))}
        />
      </div>
    </>
  );
}
