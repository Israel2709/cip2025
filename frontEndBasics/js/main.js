/*Métodos de selección de DOM*/

/*Selector por tagname*/
/*getElementsByTagName, permite seleccionar todos los elementos que pertenezcan al tagname indicado, y los devuelve agrupados en una HTMLCollection*/

const listItems = document.getElementsByTagName("li");
console.log(listItems);

/*Selector por clase*/
/*getElementsByClassName(classname), permite seleccionar todos los elementos que incluyan dentro de su classlist el classname indicado como argumento, y los devuelve como una HTMLCollection*/

const orderedItems = document.getElementsByClassName("ordered-items");

console.log(orderedItems);

/*Selector por id*/
/*getElementById(id), permite seleccionar el elemento que tiene como id el id indicado en el argumento, y lo devuelve como un elemento de DOM*/

const testButton = document.getElementById("test-button");
console.log(testButton);

/*Query Selector*/
/*document.querySelectorAll(validCssSelector) && document.querySelector(validCssSelector) permiten seleccionar aquellos elementos de DOM que cumplan con un selector de css cualquiera

en el caso de querySelectorAll, devuelve todos los elementos que coincidan con el selector, envueltos en una NodeList

en el caso de querySelector
*/

const unorderedItems = document.querySelectorAll("ul li");

const unorderedItem = document.querySelector("ul li");

console.log(unorderedItems);
console.log(unorderedItem);

const radios = document.getElementsByName("my-radio");

console.log(radios);

/*Listeners*/
/*Los listeners permiten activar acciones dentro de los elementos de DOM*/

/*
    lo primero que se necesita es el elemento que vamos a activar
*/

const styleButton = document.getElementById("style-button");

/*El siguiente paso es poner el elemento a la escucha de algún evento, para eso ocupados element.addEventListener(event, callback)

element: es el elemento de DOM que queremos activar
addEventListener: es el método de JS para poner un elemento a la escucha de eventos
event: El evento que queremos escuchar ( "click", "keyup", "keypress", "keydown", etc)
callback: Lo que queremos que suceda cuando el evento ocurra
*/

const customizableElements = document.querySelectorAll("ul li");

styleButton.addEventListener("click", () => {
  console.log("cambiando estilos");
  console.log(customizableElements);
  customizableElements.forEach((element) => {
    console.log(element);
    element.classList.add("py-2", "px-4", "bg-black", "text-white");
  });
});

const saveUserBtn = document.getElementById("save-user");

const usersArray = [];

/*Recorrer el array de usuarios
por cada usuario, crear un li
    ese li debe tener dentro el nombre y el correo del usuario separados con un guión
    el li debe insertarse en la lista de usuarios del dom
*/

const printUsers = (usersArray) => {
  const userList = document.getElementById("users-list");
  userList.innerHTML = "";
  usersArray.forEach(({ userName, userEmail }) => {
    /*Método de creación de elementos:*/
    const userItem = document.createElement("li");
    const userItemContent = `${userName} - ${userEmail}`;

    /*El método append permite insertar un elemento dentro de otro elemento, y la sintaxis es:
    parent.append(child)*/
    userItem.append(userItemContent);

    console.log(userItem);

    userItem.classList.add("border", "p-4", "mb-4");

    /*el siguiente paso es insertar el userItem en la lista*/
    userList.append(userItem);
  });
};

saveUserBtn.addEventListener("click", (event) => {
  event.preventDefault();
  /*Yo quiero extaer el valor del campo "nombre"*/
  const userNameField = document.getElementById("user-name");
  const userName = userNameField.value;

  const userEmailField = document.getElementById("user-email"); /*element*/
  const userEmail = userEmailField.value;

  /*falsy = null, undefined, NaN, 0, ""*/
  /*truthy = !falsy */

  if (!userName) {
    userNameField.classList.add("border-red-500");
    userNameField.nextElementSibling.classList.remove("hidden");
  }
  if (!userEmail) {
    userEmailField.classList.add("border-red-500");
    userEmailField.nextElementSibling.classList.remove("hidden");
  }
  if (userName && userEmail) {
    const userObject = { userName, userEmail };
    usersArray.push(userObject);
    userEmailField.value = "";
    userNameField.value = "";
    console.log(usersArray);

    printUsers(usersArray);
  }
});

//printUsers(mockUsers);
