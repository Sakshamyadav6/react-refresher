import { Button, Form, Modal } from "react-bootstrap";

const EditModal = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control" type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditModal;
