import calculateDaysBetweenDates from "./calculateDaysBetweenDates.js";
document.getElementById("btn-submit").addEventListener("click", () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const daysDifference = calculateDaysBetweenDates(new Date(startDate), new Date(endDate));
    localStorage.setItem("daysDifference", daysDifference.toString());
    window.location.href = "../public/result.html";
});
// TODO: implementar botão copiar o valor quantidade de dias
// TODO: implementar página inicial e result
