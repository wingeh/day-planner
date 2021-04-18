const today = moment().format("dddd, MMMM Do YYYY");
console.log(today);


const displayDate = document.getElementById("currentDate");

displayDate.innerText = `Date: ${today}`;