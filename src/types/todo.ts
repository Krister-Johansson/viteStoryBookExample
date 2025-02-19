export const TODO_STATUSES = ["pending", "in-progress", "completed"] as const;
export type TodoStatus = (typeof TODO_STATUSES)[number];
export const TODO_TAGS = [
  "design",
  "development",
  "bug",
  "feature",
  "documentation",
] as const;
export type Tag = (typeof TODO_TAGS)[number];

export type TodoAssigned = {
  name: string;
  avatarUrl?: string;
};

export type Todo = {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  tags: Tag[];
  created: Date;
  completed?: Date;
  assigned: TodoAssigned | null;
};
