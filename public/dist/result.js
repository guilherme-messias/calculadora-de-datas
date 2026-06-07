"use strict";
window.onload = () => {
    const daysDifference = localStorage.getItem("daysDifference") || "0";
    const divResult = document.getElementById("result");
    divResult.innerHTML = `A diferença entre as datas é de ${daysDifference} dias`;
};
document.getElementById("btn-copy").addEventListener("click", () => {
    const daysDifference = localStorage.getItem("daysDifference") || "0";
    navigator.clipboard.writeText(daysDifference);
});
