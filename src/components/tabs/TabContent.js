import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CRUD_MODE_CREATE } from "../../config/constants";
import { saveTab, updateTab } from "../../redux/features/tab/tabsSlice";
import DeleteModal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../../api/posts";

function TabContent(post) {
  const { id, tempBody, body } = post;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { crudMode } = useSelector((state) => state.tabs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const changeHandler = (value) => {
    dispatch(updateTab({ id, tempBody: value, body }));
  };
  const saveHandler = (e) => {
    e.preventDefault();
    if (crudMode === CRUD_MODE_CREATE) {
      createPost(convertToServerFormat(post));
    } else {
      updatePost(convertToServerFormat(post));
    }
    dispatch(saveTab({ id }));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    deletePost(id);
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <>
      {isModalOpen && (
        <DeleteModal
          show={isModalOpen}
          handleCancel={() => setIsModalOpen(false)}
          handleOk={deleteHandler}
          message={"Are you sure you want to delete?"}
        />
      )}
      <Form.Control
        as="textarea"
        value={tempBody}
        onChange={(e) => changeHandler(e.target.value)}
        style={{ height: 200 }}
      />
      <Button className={"m-3"} onClick={(e) => saveHandler(e)}>
        Save
      </Button>
      <Button
        className={"m-3 btn btn-danger"}
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </Button>
    </>
  );
}

const convertToServerFormat = ({ id, title, tempBody, createdAt }) => {
  return { id, title, body: tempBody, createdAt };
};

export default TabContent;
