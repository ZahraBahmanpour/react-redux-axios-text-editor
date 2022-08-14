import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/features/post/postSlice";
import { saveTab, updateTab } from "../../redux/features/tab/tabsSlice";

function TabContent(post) {
  const { id, tempBody } = post;
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    dispatch(updateTab({ id, tempBody: value }));
  };
  const clickHandler = () => {
    dispatch(updatePost(convertToServerFormat(post)));
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
      <Button className={"m-3"} onClick={clickHandler}>
        Save
      </Button>
    </>
  );
}

const convertToServerFormat = ({ id, title, tempBody, createdAt }) => {
  return { id, title, body: tempBody, createdAt };
};

export default TabContent;
