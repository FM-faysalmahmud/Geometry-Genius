document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    const firstInputField = document.getElementById("ellipse-first-input");
    const firstInputFieldString = firstInputField.value;
    const secondInputField = document.getElementById("ellipse-second-input");
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

    const initialTotal = 3.14 * firstInputFieldString * secondInputFieldString;
    const finalTotal = parseFloat(initialTotal);
    firstInputField.value = "";
    secondInputField.value = "";

    // Create Area calculation elements

    CreateAreaCalculateElements("ellipse", finalTotal);
  });
