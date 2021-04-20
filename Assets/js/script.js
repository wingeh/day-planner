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

// Save to local storage ------------------------------------------------------ 

$(document).ready(function () { 
    save.on('click', function () {
      var hours = $(this).siblings('.description').val();
      var tasks = $(this).parent().attr('id');
      localStorage.setItem(tasks, hours);
    })
});

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
