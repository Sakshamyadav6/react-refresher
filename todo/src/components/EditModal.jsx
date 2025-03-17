import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditModal = ({ showModal, setShowModal, todotoedit, handleUpdate }) => {
  const [editedTodo, setEditedTodo] = useState(todotoedit.todo);
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setEditedTodo(todotoedit.todo);
  }, [todotoedit]);
  const handleSubmit = () => {
    handleUpdate(todotoedit.id, editedTodo);
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            value={editedTodo}
            onChange={(e) => {
              setEditedTodo(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditModal;
