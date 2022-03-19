// javascript

// TIME DISPLAY
var today = moment().format("dddd Do MMM YYYY [at] h:mm:ss a");

function showToday() {
    setInterval(function() {
        $("#currentDay").text(moment().format("dddd Do MMM YYYY [at] h:mm:ss a"));
    }, 1000);

    $("#currentDay").text(today);
}

showToday();



