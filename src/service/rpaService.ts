import api from "@/api/axios";

export const rpaService = {
  getAllRpa: async () => {
    const response = await api.get("/process/getall");
    return response.data;
  },
};
