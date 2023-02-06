export const formatDate = (fecha) => {
  const fechaNew = new Date(fecha);
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return fechaNew.toLocaleDateString("es-ES", options);
};
