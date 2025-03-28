export type StoreFn = () => Store;

export interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  status: "active" | "inactive";
  emailVerified: boolean;
  auth_type: "email" | "mobile";
  role: "user" | "admin";
  createdAt: string;
}

export interface Store {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
