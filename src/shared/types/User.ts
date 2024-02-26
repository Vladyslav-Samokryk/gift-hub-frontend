export type RoleUnion = "admin" | "manager" | "auth_user" | "guest_user";

export interface User {
  role: RoleUnion;
  email: string;
  first_name: string;
  last_name: string;
}
