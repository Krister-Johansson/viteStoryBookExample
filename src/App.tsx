import { useState } from "react";
import TodoList from "./components/TodoList";
import { Todo, TodoStatus } from "./types/todo";
import { initialTodos } from "./data/mockTodos";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleStatusChange = (id: number, status: TodoStatus) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };
  return <TodoList todos={todos} onStatusChange={handleStatusChange} />;
};

export default App;
