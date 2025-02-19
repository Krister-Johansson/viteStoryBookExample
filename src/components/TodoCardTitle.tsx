import { TodoStatus } from "@/types/todo";
import { Badge } from "./ui/badge";
import { CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface TodoCardTitleProps {
  id: number;
  title: string;
  status: TodoStatus;
  onStatusChange: (id: number, status: TodoStatus) => void;
}

const TodoCardTitle = ({
  id,
  title,
  status,
  onStatusChange,
}: TodoCardTitleProps) => {
  return (
    <CardTitle className="flex items-center justify-between">
      <Checkbox
        id={`todo-${id}`}
        checked={status === "completed"}
        onCheckedChange={() =>
          onStatusChange(id, status === "completed" ? "pending" : "completed")
        }
        // disabled={status === "pending"}
      />
      <span
        className={`ml-2 flex-grow ${
          status === "completed" ? "line-through" : ""
        }`}
      >
        {title}
      </span>
      <Badge variant={status === "completed" ? "default" : "secondary"}>
        {status}
      </Badge>
    </CardTitle>
  );
};

export default TodoCardTitle;
