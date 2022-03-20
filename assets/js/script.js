// javascript

// DATE & TIME DISPLAY

// make the date display
var today = moment().format("dddd, Do MMM YYYY [at] h:mm:ss a");
$("#currentDay").text(today);

// make the time display count up
setInterval(function() {
        $("#currentDay").text(moment().format("dddd, Do MMM YYYY [at] h:mm:ss a"));
    }, 1000);


// TIME BLOCKS

// textbox colour change function
function pastPresentOrFuture() {
    // grab the DOM element with the class name 'time-block'
    var timeBlock = $(".time-block");
    // set variable for current hour using moment.hour
    var currentTime = moment().hour();

    // begin a jquery for-each loop
    timeBlock.each(function() {
        // for each time-block div, target 'THIS' element

        // grab the ID attribute of 'THIS', split it from 'hour-' into an array containing "hour-" and "num (9, 10, etc)"
        // new array made from string split: [ "hour-", "num" ]

        // use the second index [1] which is the number, parse it from a string state into a useable number

        // now each hour block is assigned a unique and useable number to test conditions against
        var hourBlock = parseInt($(this).attr("id").split("hour-")[1]);

        // if the hour block number is under current hour
        if (hourBlock < currentTime) {
            // add class "past", remove "present" and "future"
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

            console.log("< hour/time " + hourBlock, currentTime);

        // if the hour block number is equal to the current hour
        } else if (hourBlock === currentTime) {
            // add class "present", remove "past" and "future"
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        
            console.log("= hour/time " + hourBlock, currentTime);

        // for everything else (basically hour block over current hour)
        } else {
            // add class "future", remove "past" and "present"
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

            console.log("> hour/time " + hourBlock, currentTime);
        }
    });
}

// SAVE BUTTON

// make save button variable
var saveButton = $(".saveBtn");
// clicking save button will activate 'save to local storage'
saveButton.on("click", saveToLocalStorage);

// LOCAL STORAGE functions

function saveToLocalStorage() {
    // set variable to grab the hour id of saveButton's parent, which is "hour-9, hour-10, etc"
    var hour = $(this).parent().attr("id");
    // set variable to grab the VALUE coming from the class 'description', which is the textarea (sibling of saveButton)
    var plans = $(this).siblings(".description").val();

    // save in localStorage as hour + plans
    // saves like this: "hour-9"(id): "text text"(.description)
    localStorage.setItem(hour, plans);
}

function retrieveFromLocalStorage() {
    // for element ID hour-9 and associated description, grab key 'hour-9" from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    // for element ID hour-10 and associated description, grab key 'hour-10" from local storage
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    // continue for the rest of the hour blocks
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

function init() {
    // (1) retrieve any data from local Storage and populate planner
    retrieveFromLocalStorage();
    // (2) change textarea box colour depending on current time
    pastPresentOrFuture();
}

// load the page
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




