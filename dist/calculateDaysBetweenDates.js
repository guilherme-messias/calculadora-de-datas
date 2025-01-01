"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateDaysBetweenDates;
function calculateDaysBetweenDates(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));
    return diffDays;
}
