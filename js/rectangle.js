document
  .getElementById("rectangle-calculate")
  .addEventListener("click", function () {
    const firstInputField = document.getElementById("rectangle-first-input");
    const firstInputFieldString = firstInputField.value;
    const secondInputField = document.getElementById("rectangle-second-input");
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

    const initialTotal = firstInputFieldString * secondInputFieldString;
    const finalTotal = parseFloat(initialTotal);
    firstInputField.value = "";
    secondInputField.value = "";
    // Create Area calculation elements

    CreateAreaCalculateElements("rectangle", finalTotal);
  });
