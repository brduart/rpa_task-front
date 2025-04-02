import api from "@/api/axios";

interface LoginResponse {
  token: string;
}

export const authService = {
  login: async (name: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", {
      name,
      password,
    });
    return response.data;
  },

  register: async (name: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/register", {
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
