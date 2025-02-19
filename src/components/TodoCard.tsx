import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Todo, TodoStatus } from "@/types/todo";
import TodoCardContentAssigned from "./TodoCardContentAssigned";
import TodoCardContentTags from "./TodoCardContentTags";
import TodoCardTitle from "./TodoCardTitle";

interface TodoCardProps {
  todo: Todo;
  onStatusChange: (id: number, status: TodoStatus) => void;
}

const TodoCard = ({ todo, onStatusChange }: TodoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <TodoCardTitle
          id={todo.id}
          title={todo.title}
          status={todo.status}
          onStatusChange={onStatusChange}
        />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{todo.description}</p>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Created: {todo.created.toLocaleDateString()}</span>
          {todo.completed && (
            <span>Completed: {todo.completed.toLocaleDateString()}</span>
          )}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <TodoCardContentTags tags={todo.tags} />
          <TodoCardContentAssigned assigned={todo.assigned} />
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
