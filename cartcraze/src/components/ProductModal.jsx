import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

const ProductModal = ({
  openModal,
  handleClose,
  isEdit,
  addProductHandle,
  editProductHandle,
  prod,
  handleOnChange,
}) => {
  return (
    <>
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? <>Edit Product</> : <>Add Product</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <FloatingLabel controlId="floatingTitle" label="Enter Title">
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={prod.title}
                    name="title"
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel controlId="floatingPrice" label="Enter Price">
                  <Form.Control
                    type="text"
                    placeholder="Enter Price"
                    value={prod.price}
                    name="price"
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingQuantity"
                  label="Enter Quantity"
                  className="mt-2"
                >
                  <Form.Control
                    type="number"
                    placeholder="Enter Quantity"
                    value={prod.stock}
                    name="stock"
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingBrand"
                  label="Enter Brand"
                  className="mt-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Brand"
                    value={prod.brand}
                    name="brand"
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FloatingLabel
                  controlId="floatingDesc"
                  label="Enter Description"
                  className="mt-2"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Enter DEscription "
                    value={prod.description}
                    style={{ height: "100px" }}
                    name="description"
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Control type="file" className="mt-2" />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="warning"
            onClick={isEdit ? editProductHandle : addProductHandle}
          >
            {isEdit ? <>Edit Product</> : <>Add Product</>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
