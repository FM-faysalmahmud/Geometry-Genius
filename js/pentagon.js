document
  .getElementById("pentagon-calculate")
  .addEventListener("click", function () {
    const firstInputField = document.getElementById("pentagon-first-input");
    const firstInputFieldString = firstInputField.value;
    const secondInputField = document.getElementById("pentagon-second-input");
    const secondInputFieldString = secondInputField.value;

    if (
      isNaN(parseFloat(firstInputFieldString)) ||
      firstInputFieldString === ""
    ) {
      alert("Please provide a number in the first field");
      return;
    }
    if (
      isNaN(parseFloat(secondInputFieldString)) ||
      secondInputFieldString === ""
    ) {
      alert("Please provide a number in the second field");
      return;
    }

    const initialTotal = 0.5 * firstInputFieldString * secondInputFieldString;
    const finalTotal = parseFloat(initialTotal);
    firstInputField.value = "";
    secondInputField.value = "";
    // Create Area calculation elements

    CreateAreaCalculateElements("pentagon", finalTotal);
  });
