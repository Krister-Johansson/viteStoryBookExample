import { TodoAssigned } from "@/types/todo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TodoCardContentAssignedProps {
  assigned: TodoAssigned | null;
}

const TodoCardContentAssigned = ({
  assigned,
}: TodoCardContentAssignedProps) => {
  if (!assigned) {
    return <span className="text-sm text-muted-foreground">Unassigned</span>;
  }
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Avatar className="w-6 h-6">
        <AvatarImage src={assigned.avatarUrl} alt={assigned.name} />
        <AvatarFallback>
          {assigned.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="text-sm text-muted-foreground">{assigned.name}</span>
    </div>
  );
};

export default TodoCardContentAssigned;
