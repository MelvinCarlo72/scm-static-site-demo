import { greet } from "../script.js";

test("greet returns correct message", () => {
  expect(greet("Melvin")).toBe("Hello, Melvin! Your CI/CD pipeline works.");
});
