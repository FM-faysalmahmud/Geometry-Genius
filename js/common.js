// box color changing function
function changeColor(id) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById(id).style.backgroundColor = "#" + randomColor;
}

//  create area calculate elements

function CreateAreaCalculateElements(calculateElementName, inputFieldId) {
  const getParentDiv = document.getElementById("area");
  const createMainLi = document.createElement("li");
  const createDiv = document.createElement("div");
  createDiv.classList.add("text-center", "flex", "justify-between", "mb-4");
  const getElementName = document.getElementById(calculateElementName);
  const createParaElementTag = document.createElement("p");
  createParaElementTag.classList.add("pr-6");
  createParaElementTag.innerText = getElementName.innerText;
  createDiv.appendChild(createParaElementTag);

  const createResultElementTag = document.createElement("p");
  createResultElementTag.classList.add("pr-6");
  if (inputFieldId % 1 == 0) {
    createResultElementTag.innerText = inputFieldId;
  } else {
    createResultElementTag.innerText = inputFieldId.toFixed(2);
  }

  const CreateUnitName = document.createElement("span");
  CreateUnitName.innerText = "cm";
  const CreateSquare = document.createElement("sup");
  CreateSquare.innerText = "2";
  createResultElementTag.appendChild(CreateUnitName);
  createResultElementTag.appendChild(CreateSquare);
  createDiv.appendChild(createResultElementTag);

  const createButton = document.createElement("button");
  createButton.classList.add(
    "bg-sky-600",
    "text-white",
    "px-1",
    "py-1",
    "rounded-md",
    "text-sm"
  );
  createButton.innerText = "Convert to m";
  const CreateSquareInButton = document.createElement("sup");
  CreateSquareInButton.innerText = "2";
  createButton.appendChild(CreateSquareInButton);
  createDiv.appendChild(createButton);

  createMainLi.appendChild(createDiv);
  getParentDiv.appendChild(createMainLi);
}
