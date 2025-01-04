window.onload = () => {
  const daysDifference: string = localStorage.getItem("daysDifference") || "0";

  const divResult: HTMLElement = document.getElementById("result") as HTMLElement;
  divResult.innerHTML = `A diferença entre as datas é de ${daysDifference} dias`;
};

(document.getElementById("btn-copy") as HTMLInputElement).addEventListener("click", () => {
  const daysDifference: string = localStorage.getItem("daysDifference") || "0";

  navigator.clipboard.writeText(daysDifference);
});
