import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SaveModal({ show, handleOk, handleCancel, message }) {
  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Save</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => handleOk(e)}>
          Ok
        </Button>
        <Button variant="danger" onClick={(e) => handleCancel(e)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveModal;
