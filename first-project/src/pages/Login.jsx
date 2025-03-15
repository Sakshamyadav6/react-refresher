import { useState } from "react";
import { Button, FloatingLabel, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password,
        }),
      });
      // const data = await response.json();
      console.log(await response.json());
      //   console.log(data);
      toast.success("Congratulations! You Logged in Successfully", {
        onClose: () => navigate("/"),
      });
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-3">Login Form</h2>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            contorId="floatingInput"
            label="Username"
            className="mb-3 w-75"
          >
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            contorId="floatingPassword"
            label="Password"
            className="w-75"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button
            className="mt-3 btn btn-warning w-25"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"> </span>
                </div>
              </>
            ) : (
              <>Login</>
            )}
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
