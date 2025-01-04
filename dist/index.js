import calculateDaysBetweenDates from "./calculateDaysBetweenDates";
document.getElementById("btn-submit").addEventListener("click", () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const daysDifference = calculateDaysBetweenDates(new Date(startDate), new Date(endDate));
    localStorage.setItem("daysDifference", daysDifference.toString());
    window.location.href = "../public/result.html";
});
window.onload = () => {
    if (window.location.pathname === "/public/result.html") {
        const daysDifference = localStorage.getItem("daysDifference") || "0";
        const divResult = document.getElementById("result");
        divResult.innerHTML = `A diferença entre as datas é de ${daysDifference} dias`;
    }
};
// TODO: implementar botão copiar o valor quantidade de dias
// TODO: implementar página inicial e result
