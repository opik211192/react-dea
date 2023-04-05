import { Card, Stack, Form, Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

// ini ada props yg di kirim dari app.js AddTodo
const AddTodo = ({ handleChangeName, todoName, addTodo }) => {
  // const AddTodo = (props) => {
  return (
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
  );
};

export default AddTodo;
