//REFRESH DATA FROM RPA
export const refreshData = (
  statusRef,
  initDataRef,
  finalDataRef,
  status,
  dataInit,
  dataFinal
) => {
  statusRef.current.innerText = status;
  initDataRef.current.innerText = dataInit;
  finalDataRef.current.innerText = dataFinal;
};

//REFRESH MESSAGE FROM RPA
export const refreshMessage = (msgRef, message) => {
  msgRef.current.innerText = message;
};

export const configDate = () => {
  const dataAtual = new Date();
  const formatador = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formatador.format(dataAtual).replace(/\//g, "-");
};
