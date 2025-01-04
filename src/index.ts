import calculateDaysBetweenDates from "./calculateDaysBetweenDates";

(document.getElementById("btn-submit") as HTMLInputElement).addEventListener("click", () => {
  const startDate: string = (document.getElementById("startDate") as HTMLInputElement).value;
  const endDate: string = (document.getElementById("endDate") as HTMLInputElement).value;

  const daysDifference: number = calculateDaysBetweenDates(new Date(startDate), new Date(endDate));

  localStorage.setItem("daysDifference", daysDifference.toString());

  window.location.href = "../public/result.html";
});


// TODO: implementar página inicial e result
