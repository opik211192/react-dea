import { useState } from "react";
import "./App.css";
import {
  Container,
  Form,
  Button,
  Stack,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todolist, setTodolist] = useState([]);

  //2.tambah todo
  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodolist([dataTodo, ...todolist]);
    setTodoName("");
  };

  //3. delete todo
  const deleteTodo = (index) => {
    // console.log(index);
    setTodolist(todolist.filter((value, idx) => index !== idx));
  };

  //1. tangkap dlu text inputnya
  const handleChangeName = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>

      {/* input todo */}
      {/* mengirim function ke komponen dgn props */}
      <AddTodo
        handleChangeName={handleChangeName}
        todoName={todoName}
        addTodo={addTodo}
      />

      {/* List todo */}
      <div className="mt-5">
        <ListTodo todolist={todolist} deleteTodo={deleteTodo} />
      </div>
    </Container>
  );
}
export default App;
