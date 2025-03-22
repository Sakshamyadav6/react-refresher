import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../services/toastify.service";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isFavourite, setIsFavourite] = useState(new Set()); //stores favourites in a set
  const [originalProd, setOriginalProd] = useState([]);
  const navigate = useNavigate();

  const getProduct = async (e) => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + "/products");
      console.log(response.data.products);
      setProduct(response.data.products);
      setOriginalProd(response.data.products);
    } catch (error) {
      console.log(error);
      errorToast(error.message);
    }
  };
  const handleFavourite = (id) => {
    setIsFavourite((prev) => {
      const hasFavourite = new Set(prev);
      if (hasFavourite.has(id)) {
        hasFavourite.delete(id);
        errorToast("Product Removed from favourite");
      } else {
        hasFavourite.add(id);
        successToast("Product Added to Favourite");
      }
      return hasFavourite;
    });
  };

  const handleSearch = (value) => {
    const searchedValue = value.toLowerCase();
    const search = originalProd.filter((prod) => {
      return prod.title.toLowerCase().includes(searchedValue);
    });
    setProduct(search);
  };

  const handleDetailPage = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="d-flex">
        <h1 className="mt-2 ms-4">Products ({product.length})</h1>
        <Form.Control
          type="text"
          placeholder="Search Product"
          className="w-25 ms-auto me-4 mt-2"
          style={{ height: "8vh" }}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>

      {product.length > 0 ? (
        <>
          <div className="ms-2 mt-4 d-flex justify-content-center flex-wrap gap-5">
            {product.map((prod, index) => {
              return (
                <div key={index}>
                  <Card style={{ width: "21rem" }}>
                    <Card.Img
                      variant="top"
                      src={prod.images[0]}
                      style={{ maxHeight: "40vh" }}
                    />

                    <Card.Body>
                      <Button
                        variant="link"
                        className="position-absolute top-0 ms-auto text-decoration-none"
                        style={{ right: 0 }}
                        onClick={() => {
                          handleFavourite(prod.id);
                        }}
                      >
                        {isFavourite.has(prod.id) ? (
                          <>
                            <i
                              className="fa-solid fa-heart text-danger fs-3"
                              style={{
                                transition:
                                  "transform 0.2s ease, color 0.2s ease",
                                transform: "scale(1.2)",
                              }}
                            ></i>
                          </>
                        ) : (
                          <>
                            <i
                              className="fa-regular fa-heart text-secondary fs-3"
                              style={{
                                transition:
                                  "transform 0.2s ease, color 0.2s ease",
                                transform: "scale(1)",
                              }}
                            ></i>
                          </>
                        )}
                      </Button>
                      <Card.Title>{prod.title}</Card.Title>
                      <Card.Text
                        className="fs-3 text-danger fw-bold"
                        style={{ textAlign: "right" }}
                      >
                        ${prod.price}
                      </Card.Text>
                      <Button
                        variant="warning"
                        className="w-100"
                        onClick={() => {
                          handleDetailPage(prod.id);
                        }}
                      >
                        Get Yours
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center">No Products Found</h2>
        </>
      )}
    </>
  );
};

export default Product;
