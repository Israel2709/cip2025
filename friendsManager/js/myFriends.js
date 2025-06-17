const MY_FRIENDS = "https://ajaxclass-1ca34.firebaseio.com/israFriends/";

const getAllFriends = async () => {
  const response = await fetch(`${MY_FRIENDS}/.json`);
  const data = await response.json();
  console.log(data);

  if (data) {
    const friendsArray = Object.keys(data).map((key) => ({
      ...data[key],
      key,
    }));

    printPeople(friendsArray);
  } else {
    const peopleListWrapper = document.getElementById("friends-list");
    peopleListWrapper.innerHTML = `
            <div class="w 1/2 bg-purple-400 text-white p-4 rounded-lg shadow">
            Aún no has agregado amigos
            </div>
    `;
  }
};

const removeFriend = async (friendKey) => {
  const response = await fetch(`${MY_FRIENDS}/${friendKey}/.json`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};

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
  const peopleListWrapper = document.getElementById("friends-list");
  peopleListWrapper.innerHTML = "";

  const personCardClassnames =
    "border shadow-lg border-purple-800 border-2 rounded-lg p-4 flex flex-col gap-4 items-center";
  const personPictureClassnames = "rounded-full w-40 h-40 object-cover";
  const personNameClassnames = "text-2xl text-purple-800";
  const personPhoneClassnames = "text-xl";
  const personEmailClassnames = "text-xl";

  peopleArray.forEach((person) => {
    let { name, email, picture, phone, key } = person;
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

    const removeFriendButton = document.createElement("button");
    removeFriendButton.classList.add(
      ...getElementClassNames(primaryButtonClassnames)
    );
    const removeFriendButtonText = document.createTextNode("Borrar amigo");
    removeFriendButton.append(removeFriendButtonText);

    removeFriendButton.addEventListener("click", async () => {
      console.log(person);
      await removeFriend(key);
      await getAllFriends();
    });

    personCard.append(
      personPicture,
      personName,
      personPhone,
      personEmail,
      removeFriendButton
    );

    peopleListWrapper.append(personCard);
  });
};

getAllFriends();
