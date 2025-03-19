import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../services/toastify.service";
import { Button, Card } from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isFavourite, setIsFavourite] = useState(new Set()); //stores favourites in a set

  const getProduct = async (e) => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL);
      console.log(response.data.products);
      setProduct(response.data.products);
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
        console.log("first");
      } else {
        hasFavourite.add(id);
        successToast("Product Added to Favourite");
      }
      return hasFavourite;
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <h1 className="mt-2 ms-4">Products ({product.length})</h1>
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
                            transition: "transform 0.2s ease, color 0.2s ease",
                            transform: "scale(1.2)",
                          }}
                        ></i>
                      </>
                    ) : (
                      <>
                        <i
                          className="fa-regular fa-heart text-secondary fs-3"
                          style={{
                            transition: "transform 0.2s ease, color 0.2s ease",
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
                  <Button variant="warning" className="w-100">
                    Get Yours
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
