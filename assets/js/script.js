// javascript

// TIME DISPLAY
var today = moment().format("dddd, Do MMM YYYY [at] h:mm:ss a");
$("#currentDay").text(today);

setInterval(function() {
        $("#currentDay").text(moment().format("dddd, Do MMM YYYY [at] h:mm:ss a"));
    }, 1000);


// TIME BLOCKS

function pastPresentOrFuture() {
    var timeBlock = $(".time-block");
    var textarea = $(".description");
    var currentTime = moment().hour();

    timeBlock.each(function() {
        var hourBlock = parseInt($(this).attr("id").split("hour-")[0]);

        // textarea.addClass("past present future");

        if (hourBlock < currentTime) {
            textarea.addClass("past");
            textarea.removeClass("present");
            textarea.removeClass("future");

        } else if (hourBlock === currentTime) {
            textarea.removeClass("past");
            textarea.addClass("present");
            textarea.removeClass("future");

        } else if (hourBlock > currentTime) {
            textarea.removeClass("past");
            textarea.removeClass("present");
            textarea.addClass("future");
        }
    });
}


var saveButton = $(".saveBtn");
saveButton.on("click", saveToLocalStorage);

function saveToLocalStorage() {
    // get value and time
    var plans = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(hour, plans);
}

function retrieveFromLocalStorage() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}


function init() {
    retrieveFromLocalStorage();
    pastPresentOrFuture();
}

init();


// ---- 


 // hours for work day
// const workDay = [
//     9, 10, 11, 12, 13, 14, 15, 16, 17
// ]

// loadPlanner();

// // put the time blocks on the page
// function loadPlanner() {

//     // grab container to hold all the hours
//     var planner = $(".container");
//     // grab current hour using moment
//     var currentHour = moment().hour();

//     // jquery for each, use the workday array and its index + index value
//     jQuery.each(workDay, function(i, value) {
//         console.log([i] + " " + value);

//         var hourArticle = $("<article>");
//         hourArticle.addClass("row border-red");
//         hourArticle.attr("id", "newID"); // <---- ?????
//         planner.append(hourArticle)

//         var hourBlock;
//         var textInput;
//         var saveButton;
//         var icon;

//         hourBlock = $("<section>");
//         hourBlock.addClass("col-2 border-green");
//         hourBlock.text(moment(value, "H").format("h A"));
//         hourArticle.append(hourBlock);

//         textInput = $("<textarea>");
//         textInput.addClass("col-8 border-green");
//         hourArticle.append(textInput);

//         if (value < currentHour) {
//             textInput.addClass("past");
//         } else if (value === currentHour) {
//             textInput.addClass("present");
//         } else {
//             textInput.addClass("future");
//         }

//         saveButton = $("<button>");
//         saveButton.addClass("col-2 saveBtn border-green");
//         saveButton.on("click", saveAndUpdate);

//         icon = $("<i>");
//         icon.addClass("fas fa-save");
//         saveButton.append(icon);
//         hourArticle.append(saveButton);

//         planner.append(hourArticle);
//     });
// }


// function saveAndUpdate(event) {
//     event.preventDefault();
    
//     // set item to storage
//     // update item to storage
//     // get item from storage
// }

// function saveToStorage() {
//     var workDaySchedule = {
        
//     }
// }




