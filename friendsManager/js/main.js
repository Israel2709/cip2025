const MY_FRIENDS = "https://ajaxclass-1ca34.firebaseio.com/israFriends/.json";

const getAllPeople = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const data = await response.json();
  printPeople(data.results);
};

const saveFriend = async (newFriend) => {
  /*newFriend es el objeto que representa al amigo que quiero guardar*/
  const response = await fetch(MY_FRIENDS, {
    method: "POST",
    body: JSON.stringify(newFriend) /*Esto es lo que quiero guardar en la db*/,
  });
  const data = await response.json();
  console.log(data);
};

getAllPeople();

const getElementClassNames = (classnamesString) => classnamesString.split(" ");
const primaryButtonClassnames =
  "bg-purple-800 text-white rounded-full px-4 py-2 hover:cursor-pointer hover:bg-purple-600";
const personCardClassnames =
  "border shadow-lg border-purple-800 border-2 rounded-lg p-4 flex flex-col gap-4 items-center";
const personPictureClassnames = "rounded-full w-40 h-40 object-cover";
const personNameClassnames = "text-2xl text-purple-800";
const personPhoneClassnames = "text-xl";
const personEmailClassnames = "text-xl";

const printPeople = (peopleArray) => {
  const peopleListWrapper = document.getElementById("people-list");
  peopleListWrapper.innerHTML = "";

  peopleArray.forEach((person) => {
    let { name, email, picture, phone } = person;
    const personCard = document.createElement("div");
    personCard.classList.add(...getElementClassNames(personCardClassnames));
    console.log(personCard);

    const personPicture = document.createElement("img");
    personPicture.classList.add(
      ...getElementClassNames(personPictureClassnames)
    );
    personPicture.setAttribute("src", picture.large);

    const personName = document.createElement("h2");
    personName.classList.add(...getElementClassNames(personNameClassnames));
    const personNameText = document.createTextNode(
      `${name.first} ${name.last}`
    );
    personName.append(personNameText);

    const personPhone = document.createElement("h2");
    personPhone.classList.add(...getElementClassNames(personPhoneClassnames));
    const personPhoneText = document.createTextNode(phone);
    personPhone.append(personPhoneText);

    const personEmail = document.createElement("h2");
    personEmail.classList.add(...getElementClassNames(personEmailClassnames));
    const personEmailText = document.createTextNode(email);
    personEmail.append(personEmailText);

    const addFriendButton = document.createElement("button");
    addFriendButton.classList.add(
      ...getElementClassNames(primaryButtonClassnames)
    );
    const addFriendButtonText = document.createTextNode("Agregar amigo");

    addFriendButton.addEventListener("click", () => {
      console.log(person);
      saveFriend(person);
    });

    addFriendButton.append(addFriendButtonText);

    personCard.append(
      personPicture,
      personName,
      personPhone,
      personEmail,
      addFriendButton
    );

    peopleListWrapper.append(personCard);
  });
};
