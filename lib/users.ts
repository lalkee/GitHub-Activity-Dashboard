export type Role = "admin" | "user" | "guest";

export interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
}

export let users: User[] = [
  { id: "1", email: "admin@example.com", password: "password123", role: "admin"},
  { id: "2", email: "user@example.com", password: "password123", role: "user"},
];