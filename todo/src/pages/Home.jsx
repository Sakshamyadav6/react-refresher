import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const todoList = {
      todo: todo,
      id: Date.now(),
      completed: false,
    };
    // console.log(todo);
    console.log(todoList);
    setTodos([...todos, todoList]);

    setTodo("");
  };
  return (
    <>
      <h1 className="text-center mt-2">Todo List</h1>
      <Form onSubmit={handleAdd}>
        <div className="m-auto w-50">
          <FloatingLabel controlId="floatingInput" label="Enter Todo">
            <Form.Control
              type="text"
              placeholder="Enter Todo"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button className="mt-2" type="submit">
            Add
          </Button>
        </div>
      </Form>
      <div className="todo">
        {todos.map((todo) => {
          return (
            <ul className="list-group m-auto w-50">
              <div>
                <li className="list-group-item mt-2 d-flex rounded" key={todo.id}>
                  <div className="left mt-2">
                    <input type="checkbox" className="me-2" />
                    <span>{todo.todo}</span>
                  </div>

                  <div className="right ms-auto">
                    <Button variant="warning" className="ms-2">
                      Edit
                    </Button>
                    <Button variant="outline-danger" className="ms-2">
                      Delete
                    </Button>
                  </div>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Home;
