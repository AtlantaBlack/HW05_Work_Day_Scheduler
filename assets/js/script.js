// javascript




// TIME DISPLAY
var today = moment().format("dddd, Do MMM YYYY [at] h:mm:ss a");
$("#currentDay").text(today);

setInterval(function() {
        $("#currentDay").text(moment().format("dddd, Do MMM YYYY [at] h:mm:ss a"));
    }, 1000);

// --- 

// TIME BLOCKS

const dayStart = 9; // 9 am 
const dayEnd = 17; // 5 pm

const workDay = [
    9, 10, 11, 12, 13, 14, 15, 16, 17
]

populatePlanner();

function populatePlanner() {
    var planner = $(".container");
    var currentTime = moment().hour();

    jQuery.each(workDay, function(i, value) {
        console.log([i] + " " + value);

        var hourArticle = $("<article>");
        hourArticle.addClass("row border-red");
        planner.append(hourArticle)

        var hourList;
        var textInput;
        var saveButton;
        var icon;

        hourList = $("<section>");
        hourList.addClass("col-2 border-green");
        hourList.text(moment(value, "H").format("h A"));
        hourArticle.append(hourList);

        textInput = $("<textarea>");
        textInput.addClass("col-8 border-green");
        hourArticle.append(textInput);

        if (value < currentTime) {
            textInput.addClass("past");
        } else if (value === currentTime) {
            textInput.addClass("present");
        } else {
            textInput.addClass("future");
        }

        saveButton = $("<button>");
        saveButton.addClass("col-2 border-green");

        icon = $("<i>");
        icon.addClass("fas fa-save");
        saveButton.append(icon);
        hourArticle.append(saveButton);

        planner.append(hourArticle);
    });
}






