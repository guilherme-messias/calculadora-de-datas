"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateDaysBetweenDates_1 = require("./calculateDaysBetweenDates");
document.getElementById("btn-submit").addEventListener("click", () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const daysDifference = (0, calculateDaysBetweenDates_1.default)(new Date(startDate), new Date(endDate));
    localStorage.setItem("daysDifference", daysDifference.toString());
    window.location.href = "../public/result.html";
});
window.onload = () => {
    if (window.location.pathname === "/public/result.html") {
        const daysDifference = localStorage.getItem("daysDifference") || "0";
    }
};
// TODO: implementar inclusão do resultado na página result.html
// TODO: implementar botão copiar o valor quantidade de dias
// TODO: implementar página inicial e result
