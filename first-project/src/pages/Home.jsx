import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const navigate = useNavigate();

  const displayProd = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setProduct(data.products);
      setOriginalProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(product);
  }, [product]);
  useEffect(() => {
    displayProd();
  }, []);

  const searchValue = (value) => {
    const sercValue = value.toLowerCase();
    const searchedValue = originalProduct.filter((result) => {
      return result.title.toLowerCase().includes(sercValue);
    });
    setProduct(searchedValue);
  };
  const handleProdPage = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <h1 className="m-3">Products({product.length})</h1>
      <div className="search">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Product"
            className="w-25 float-left mb-4 ms-2"
            onChange={(e) => {
              searchValue(e.target.value);
            }}
          />
        </Form>
      </div>
      {product.length > 0 ? (
        <>
          {" "}
          <div className="container d-flex justify-content-center align-items-space-around flex-wrap gap-5">
            {product.map((prod, index) => {
              return (
                <>
                  <Card key={index} style={{ width: "18rem", height: "25rem" }}>
                    <Card.Img
                      variant="top"
                      src={prod.images[0]}
                      style={{ height: "40vh" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {prod.title.length > 25
                          ? `${prod.title.slice(0, 25)}..`
                          : prod.title}
                      </Card.Title>
                      <Card.Text>${prod.price}</Card.Text>
                      <Button
                        className="btn btn-warning"
                        onClick={() => {
                          handleProdPage(prod.id);
                        }}
                      >
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <h3 className="text-center">Opps! No Products Found</h3>
      )}
    </>
  );
};
export default Home;
