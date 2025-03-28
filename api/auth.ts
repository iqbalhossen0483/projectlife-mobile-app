import http from "@/config/http";
import { User } from "@/store/store-type";
import { useMutation } from "@tanstack/react-query";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export function useLoginMutation() {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (payload) => {
      const data = await http.post("/auth/login", payload);
      return data;
    },
  });
}
