import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import EditModal from "../components/EditModal";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todotoedit, setTodoToEdit] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const todoList = {
      todo: todo,
      id: Date.now(),
      status: false,
    };
    // console.log(todo);
    console.log(todoList);
    setTodos([...todos, todoList]);

    setTodo("");
  };
  const handleDelete = (id) => {
    const todolist = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(todolist);
  };
  const handleCheckbox = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id == id ? { ...todo, status: !todo.status } : todo;
    });
    setTodos(updatedTodos);
  };

  const handleEdit = (todo) => {
    setShowModal(true);
    setTodoToEdit(todo);
  };

  const handleUpdate = (id, updatedtodo) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, todo: updatedtodo } : todo;
    });
    setTodos(updatedTodo);
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
            <ul className="list-group m-auto w-50" key={todo.id}>
              <div>
                <li className="list-group-item mt-2 d-flex rounded">
                  <div className="left mt-2">
                    <input
                      type="checkbox"
                      className="me-2"
                      onClick={() => {
                        handleCheckbox(todo.id);
                      }}
                    />
                    <span
                      className={
                        todo.status ? "text-decoration-line-through" : "none"
                      }
                    >
                      {todo.todo}
                    </span>
                  </div>

                  <div className="right ms-auto">
                    <Button
                      variant="warning"
                      className="ms-2"
                      onClick={() => {
                        handleEdit(todo);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="ms-2"
                      onClick={() => {
                        handleDelete(todo.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
      <EditModal
        showModal={showModal}
        setShowModal={setShowModal}
        todotoedit={todotoedit}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default Home;
