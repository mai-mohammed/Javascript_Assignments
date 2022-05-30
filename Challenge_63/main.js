
//Assignment 4

function checkStatus(a, b, c) {
  let boolVar = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
  let strVar = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let intVar = typeof a === "number" ? a : typeof b === "number" ? b : c;
  console.log(
    `Hello ${strVar}, Your Age Is ${intVar}, You Are ${
      boolVar ? "Available" : "Not Available"
    } For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

