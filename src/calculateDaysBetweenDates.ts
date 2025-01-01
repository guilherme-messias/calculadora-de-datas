export default function calculateDaysBetweenDates(startDate: Date, endDate: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));
  return diffDays;
}
