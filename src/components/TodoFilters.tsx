import { useState } from "react";
import MultiSelect from "./MultiSelect";
import { Todo, TODO_STATUSES, TODO_TAGS } from "@/types/todo";

interface TodoFiltersProps {
  todos: Todo[];
  onFilterChange: (filteredTodos: Todo[]) => void;
}

const TodoFilters = ({ todos, onFilterChange }: TodoFiltersProps) => {
  const [assignedFilters, setAssignedFilters] = useState<string[]>([]);
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [statusFilters, setStatusFilters] = useState<string[]>([]);

  const uniqueAssigned = [
    "Unassigned",
    ...new Set(todos.map((todo) => todo.assigned?.name).filter(Boolean)),
  ];
  const uniqueTags = TODO_TAGS;
  const statuses = TODO_STATUSES;

  const handleFilterChange = (
    newAssignedFilters?: string[],
    newTagFilters?: string[],
    newStatusFilters?: string[]
  ) => {
    const assignedToUse = newAssignedFilters ?? assignedFilters;
    const tagsToUse = newTagFilters ?? tagFilters;
    const statusToUse = newStatusFilters ?? statusFilters;

    const filteredTodos = todos.filter((todo) => {
      const assignedMatch =
        assignedToUse.length === 0 ||
        (assignedToUse.includes("Unassigned") && !todo.assigned?.name) ||
        assignedToUse.includes(todo.assigned?.name ?? "");
      const tagMatch =
        tagsToUse.length === 0 ||
        todo.tags.some((tag) => tagsToUse.includes(tag));
      const statusMatch =
        statusToUse.length === 0 || statusToUse.includes(todo.status);
      return assignedMatch && tagMatch && statusMatch;
    });

    onFilterChange(filteredTodos);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <MultiSelect
        options={
          uniqueAssigned.filter((name) => name !== undefined) as string[]
        }
        value={assignedFilters}
        onChange={(newValue) => {
          setAssignedFilters(newValue);
          handleFilterChange(newValue);
        }}
        placeholder="Filter by assigned"
      />
      <MultiSelect
        options={[...uniqueTags]}
        value={tagFilters}
        onChange={(newValue) => {
          setTagFilters(newValue);
          handleFilterChange(undefined, newValue);
        }}
        placeholder="Filter by tag"
      />
      <MultiSelect
        options={[...statuses]}
        value={statusFilters}
        onChange={(newValue) => {
          setStatusFilters(newValue);
          handleFilterChange(undefined, undefined, newValue);
        }}
        placeholder="Filter by status"
      />
    </div>
  );
};

export default TodoFilters;
