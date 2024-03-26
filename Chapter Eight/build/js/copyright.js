"use strict";
// const year = document.getElementById("year")
// const thisYear = (new Date().getFullYear());
// console.log(thisYear)
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation:
// let year: HTMLElement | null = document.getElementById("year")
// let thisYear: string 
// thisYear = (new Date().getFullYear().toString());
// console.log(thisYear)
// if (year) { //if year exists
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
//2nd variation
const year = document.getElementById("year");
const thisYear = (new Date().getFullYear().toString());
console.log(thisYear);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
