import api from "@/api/axios";

interface LoginResponse {
  token: string;
}

export const authService = {
  login: async (name: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/users/login", {
      name,
      password,
    });
    return response.data;
  },

  register: async (name: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/users", {
      name,
      password,
      role: "ROLE_USER",
    });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};
