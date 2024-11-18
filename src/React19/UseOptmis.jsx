import { useState } from "react";
import { useOptimistic } from "react";

function UseOptmis() {
  const [todos, setTodos] = useState([{ text: "weoiw" }]);

  const [Optimistic, setOptimistic] = useOptimistic(
    todos,
    (oldtodos, newtodo) => [...oldtodos, { text: newtodo, pending: true }]
  );

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");

    setOptimistic(newTodo);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {Optimistic.map((todo, index) => (
        <div key={index}>
          {todo.text}
          {todo.pending && <span className="bigDot"> (Adding...)</span>}
        </div>
      ))}
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default UseOptmis;
