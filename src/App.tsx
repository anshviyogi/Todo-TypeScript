import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string | number;
  todoTitle: string;
};

function App() {
  const [state, setState] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const submitHandler = (e: any): Array<Todo> | void => {
    e.preventDefault();

    if (!state) {
      // returning void
      return alert("Type a Todo");
    }

    const obj = {
      id: uuidv4(),
      todoTitle: state,
    };

    setTodos([...todos, obj]);

    setState("");

    return todos;
  };

  const deleteHandler = (id: string | number): Array<Todo> | void => {
    const filtered = todos.filter((item) => item.id !== id);

    setTodos(filtered);
    return todos;
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <form>
        <input
          placeholder="Your Todo"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>

      {todos?.map((item) => (
        <div style={{ display: "flex" }}>
          <h1>{item.todoTitle}</h1>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
