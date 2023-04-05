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
      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              type="text"
              placeholder="Masukan todo..."
              onChange={handleChangeName}
              value={todoName}
            />
            <Button onClick={addTodo}>
              <FaPlusCircle />
            </Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* List todo */}
      <div className="mt-5">
        {todolist.map((value, index) => {
          return (
            <Card className="mt-3">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>{value.todoName}</h3>
                  </Col>

                  <Col xl="1">
                    <Button>Selesai</Button>
                  </Col>
                </Row>
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => deleteTodo(index)}
                >
                  Hapus
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
export default App;
