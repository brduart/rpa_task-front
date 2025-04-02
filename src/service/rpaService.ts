import api from "@/api/axios";

export const rpaService = {
  getAllRpa: async () => {
    const response = await api.get("/rpa");
    return response.data;
  },

  getRpaById: async (id) => {
    const response = await api.get(`/rpa/${id}`);
    console.log(id);
    return response.data;
  },
  addMessage: async (id, message) => {
    const response = await api.post(`/rpa/message/${id}`, {
      processMessage: message,
    });
    return response.data;
  },
  editData: async (id, status, dataHoraInicio, dataHoraFinalizacao) => {
    const response = await api.put(`/rpa/${id}`, {
      status,
      dataHoraInicio,
      dataHoraFinalizacao,
    });
    return response.data;
  },
};
