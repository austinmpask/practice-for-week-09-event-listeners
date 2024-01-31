document.addEventListener("DOMContentLoaded", (event) => {
  console.log("dom loaded");

  const input1 = document.getElementById("red-input");
  input1.addEventListener("input", () => {
    if (input1.value === "red") {
      document.getElementById("section-1").style.backgroundColor = "red";
    }
  });

  const addItemButton = document.getElementById("add-item");
  addItemButton.addEventListener("click", () => {
    const listAdd = document.getElementById("list-add");

    if (listAdd.value) {
      const newLi = document.createElement("li");
      newLi.innerHTML = listAdd.value;
      document.getElementById("section-2").children[1].appendChild(newLi);
      listAdd.value = "";
    }
  });

  const colorSelect = document.getElementById("color-select");
  colorSelect.addEventListener("change", () => {
    document.getElementById("section-3").style.backgroundColor =
      colorSelect.value;
  });
});
