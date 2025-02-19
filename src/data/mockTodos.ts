import { faker } from "@faker-js/faker";
import { Todo } from "../types/todo";

faker.seed(1337);

const generateMockTodos = (count: number = 4): Todo[] => {
  return Array.from({ length: count }, (_, index) => {
    // Generate assigned first since status depends on it
    const assigned =
      faker.helpers.maybe(() => ({
        name: faker.person.fullName(),
        avatarUrl: `https://api.dicebear.com/6.x/avataaars/svg?seed=${faker.string.uuid()}`,
      })) || null;

    // If not assigned, status must be pending, otherwise can be any status
    const status = assigned
      ? faker.helpers.arrayElement([
          "pending",
          "in-progress",
          "completed",
        ] as const)
      : "pending";

    return {
      id: index + 1,
      title: faker.hacker.phrase(),
      description: faker.lorem.sentence(),
      status,
      tags: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () =>
        faker.helpers.arrayElement([
          "design",
          "development",
          "bug",
          "feature",
          "documentation",
        ])
      ),
      created: faker.date.recent({ days: 30 }),
      completed: faker.helpers.maybe(() => faker.date.recent({ days: 15 })),
      assigned,
    };
  });
};

export const initialTodos = generateMockTodos(10);
