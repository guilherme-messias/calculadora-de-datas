import calculateDaysBetweenDates from "./calculateDaysBetweenDates";

(document.getElementById("btn-submit") as HTMLInputElement).addEventListener("click", () => {
  const startDate: string = (document.getElementById("startDate") as HTMLInputElement).value;
  const endDate: string = (document.getElementById("endDate") as HTMLInputElement).value;

  const daysDifference: number = calculateDaysBetweenDates(new Date(startDate), new Date(endDate));

  localStorage.setItem("daysDifference", daysDifference.toString());
  window.location.href = "../public/result.html";
});

window.onload = () => {
  if (window.location.pathname === "/public/result.html") {
    const daysDifference: string = localStorage.getItem("daysDifference") || "0";
  }
};

// TODO: implementar inclusão do resultado na página result.html
// TODO: implementar botão copiar o valor quantidade de dias
// TODO: implementar página inicial e result
