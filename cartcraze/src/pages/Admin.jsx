import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../services/toastify.service";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Image,
  Table,
} from "react-bootstrap";
import { deleteProd } from "../services/axios.service";

const Admin = () => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + "/product");
      console.log(response.data);
      setProduct(response.data.products);
    } catch (error) {
      console.log(error);
      errorToast(error.message);
    }
  };

  const handleDelete = async (id) => {
    //delete using api call
    try {
      const response = await deleteProd(`product/${id}`);
      successToast("Deleted Sucessfully");
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // delete in state
    const fiteredprod = product.filter((result) => result.id !== id);
    setProduct(fiteredprod);
  };
  const handleEdit = (e) => {
    e.preventDefault;
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {product ? (
        <>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 className="mt-2 ms-3">Products ({product.length})</h2>
              <FloatingLabel
                controlId="floatingSearch"
                label="Search Products"
                className="me-2 mt-2 mb-2 w-25"
              >
                <Form.Control type="text" placeholder="Search Products" />
              </FloatingLabel>
            </div>
            <Container>
              <Table striped bordered hover className="mt-2">
                <thead className="fw-bold">
                  <tr>
                    <td>Image</td>
                    <td>Title</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Category</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                {product.length === 0 ? (
                  <p> No Products Found</p>
                ) : (
                  <>
                    {product.map((prod) => {
                      return (
                        <>
                          <tbody key={prod.id}>
                            <tr>
                              <td>
                                <Image
                                  src={prod.thumbnail}
                                  height={100}
                                  width={100}
                                />
                              </td>
                              <td>{prod.title}</td>
                              <td>{prod.stock}</td>
                              <td>${prod.price}</td>
                              <td>{prod.brand}</td>
                              <td className="text-capitalize">
                                {prod.category}
                              </td>
                              <td>
                                <Button
                                  variant="warning"
                                  className="ms-1 me-1 mt-1"
                                  onClick={() => {
                                    handleEdit(prod);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  className="ms-2 mt-1"
                                  onClick={() => {
                                    handleDelete(prod.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </>
                )}
              </Table>
            </Container>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center mt-2">Loading... </h1>
        </>
      )}
    </>
  );
};

export default Admin;
