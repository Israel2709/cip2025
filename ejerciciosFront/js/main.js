const saveButton = document.getElementById("save-user");

saveButton.addEventListener("click", (event) => {
  console.log("click");
  event.preventDefault();
  const userFields = document.querySelectorAll("#user-form input");

  console.log(userFields);

  let errors = 0;

  userFields.forEach((field) => {
    console.log(field.type);
    if (!field.value && field.type === "text") {
      field.classList.add("border-rose-600");
      errors += 1;
    }
    if (field.type === "checkbox" && !field.checked) {
      alert("debes aceptar la política de privacidad");
    }
  });

  if (errors != 0) {
    alert(`Debes corregir ${errors} errores en tu formulario`);
  }
});
