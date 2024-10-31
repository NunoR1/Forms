    // JavaScript code for form validation
	// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Retrieve the input field value
  var answer = document.getElementById("inputField");

  // Regular expression pattern for alphanumeric input
  var answerRegex = /^[a-zA-Z0-9]+$/;
  // Check if the input value matches the pattern
  if (answerRegex.test(answer.value)) {
    // Valid input: display confirmation and submit the form
    alert("happy")
    document.getElementById("myForm")
    // Invalid input: display error message
  } else {
    alert("sad")
    event.preventDefault()
  }
});