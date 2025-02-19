import { Todo, TodoStatus } from "@/types/todo";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import TodoFilters from "./TodoFilters";

interface TodoListProps {
  todos: Todo[];
  onStatusChange: (id: number, status: TodoStatus) => void;
}

const TodoList = ({ todos, onStatusChange }: TodoListProps) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const orderedTodos = [...filteredTodos].sort((a, b) => {
    if (a.status === "completed" && b.status !== "completed") return 1;
    if (a.status !== "completed" && b.status === "completed") return -1;
    return a.created.getTime() - b.created.getTime();
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoFilters todos={todos} onFilterChange={setFilteredTodos} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {orderedTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onStatusChange={onStatusChange} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
