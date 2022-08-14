import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CRUD_MODE_CREATE } from "../../config/constants";
import { createPost, updatePost } from "../../redux/features/post/postSlice";
import { saveTab, updateTab } from "../../redux/features/tab/tabsSlice";

function TabContent(post) {
  const { id, tempBody, body } = post;
  const dispatch = useDispatch();
  const { crudMode } = useSelector((state) => state.tabs);
  const changeHandler = (value) => {
    dispatch(updateTab({ id, tempBody: value, body }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(crudMode);
    if (crudMode === CRUD_MODE_CREATE) {
      dispatch(createPost(convertToServerFormat(post)));
    } else {
      dispatch(updatePost(convertToServerFormat(post)));
    }
    dispatch(saveTab({ id }));
  };
  return (
    <>
      <Form.Control
        as="textarea"
        value={tempBody}
        onChange={(e) => changeHandler(e.target.value)}
        style={{ height: 200 }}
      />
      <Button className={"m-3"} onClick={(e) => clickHandler(e)}>
        Save
      </Button>
    </>
  );
}

const convertToServerFormat = ({ id, title, tempBody, createdAt }) => {
  return { id, title, body: tempBody, createdAt };
};

export default TabContent;
