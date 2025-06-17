const MY_FRIENDS = "https://ajaxclass-1ca34.firebaseio.com/israFriends/.json";

const getAllFriends = async () => {
  const response = await fetch(MY_FRIENDS);
  const data = await response.json();
  console.log(data);
  //printPeople(data.results);
};

getAllFriends();
