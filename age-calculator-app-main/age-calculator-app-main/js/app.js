function copySelectedDay() {
  const selectedOption = document.getElementById("day").value;
  const selectedElement = document.getElementById("selectedDay");
  selectedElement.innerText = selectedOption;
}

function copySelectedMonth() {
  const selectedOption = document.getElementById("month").value;
  const selectedElement = document.getElementById("selectedMonth");
  selectedElement.innerText = selectedOption;
}

function copyInputYear() {
  const input = document.getElementById("year").value;
  const inputYear = document.getElementById("inputYear");
  inputYear.innerText = input;
}

function calculateAge() {
  const selectedYear = parseInt(document.getElementById("year").value);
  const selectedMonth = parseInt(document.getElementById("month").value);
  const selectedDay = parseInt(document.getElementById("day").value);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Note: Month is zero-based
  const currentDay = currentDate.getDate();

  let ageYear = currentYear - selectedYear;
  let ageMonth = currentMonth - selectedMonth;
  let ageDay = currentDay - selectedDay;

  const monthsWith30Days = [4, 6, 9, 11]; // April, June, September, November

  // Check for invalid input: Months with 30 days
  if (monthsWith30Days.includes(selectedMonth) && selectedDay === 31) {
    // Display error message
    document.getElementById("error").textContent = "Invalid input: This month does not have 31 days";
    return; // Stop further calculations
  }

  // Adjust the age if the current month and day are earlier than the selected month and day
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth = 12 - Math.abs(ageMonth);
  }

  // Display the calculated age in the HTML elements
  document.getElementById("inputYear").textContent = ageYear;
  document.getElementById("selectedMonths").textContent = ageMonth;
  document.getElementById("selectedDays").textContent = ageDay;
  document.getElementById("error").textContent = ""; // Clear any previous error message
}

// Display required error message when empty
function copySelectedMonth() {
  var selectElement = document.getElementById("month");
  var requiredMessage = document.getElementById("requiredMessage");

  if (selectElement.value === "") {
    selectElement.classList.add("required");
    requiredMessage.classList.remove("hidden");
  } else {
    selectElement.classList.remove("required");
    requiredMessage.classList.add("hidden");
  }
}

