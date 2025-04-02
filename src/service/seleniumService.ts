import api from "@/api/axios";

export const seleniumService = {
  initTest: async (id) => {
    const response = await api.get(`/selenium/${id}`);
    return response.data;
  },
};
