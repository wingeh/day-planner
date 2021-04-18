var timeBlocks = $('.time-block');
var save = $('.saveBtn');

// Get current time and run current time checker to update styles of timeblocks
const currentTime = moment().hour();
checkCurrentTime();

// Display current date --------------------------------------------------------
const today = moment().format("dddd, MMMM Do YYYY");
const displayDate = document.getElementById("currentDate");

displayDate.innerText = `Date: ${today}`;


// Function to change row class based on current time (past, present, future) --

function checkCurrentTime() {
    timeBlocks.each(function () {
    var currentBlock = parseInt($(this).attr('id').split('-')[1]);
        if (currentBlock === currentTime) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        } else if (currentBlock < currentTime) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        };
    });
};