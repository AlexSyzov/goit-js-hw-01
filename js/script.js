import users from "./users.js";

//=====================================================

const getUserNames = (users) => {
  const names = users.map((user) => user.name);

  return names;
};

console.log(getUserNames(users));

//=====================================================

const getUsersWithEyeColor = (users, color) => {
  const usersByEyeColor = users.filter((user) => user.eyeColor === color);

  return usersByEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue"));

//=====================================================

const getUsersWithGender = (users, gender) => {
  const usersByGender = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);

  return usersByGender;
};

console.log(getUsersWithGender(users, "male"));

//=====================================================

const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter((user) => !user.isActive);

  return inactiveUsers;
};

console.log(getInactiveUsers(users));

//=====================================================

const getUserWithEmail = (users, email) => {
  const usersByEmail = users.find((user) => user.email === email);

  return usersByEmail;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

//=====================================================

const getUsersWithAge = (users, min, max) => {
  const usersByAge = users.filter((user) => user.age >= min && user.age <= max);

  return usersByAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//=====================================================

const calculateTotalBalance = (users) => {
  const totalBalance = users
    .map((user) => user.balance)
    .reduce((total, currentBalance) => total + currentBalance);

  // let totalBalance = 0;
  // users.forEach((user) => (totalBalance += user.balance));

  return totalBalance;
};

console.log(calculateTotalBalance(users));

//=====================================================

const getUsersWithFriend = (users, friendName) => {
  const usersByFriend = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

  return usersByFriend;
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

//=====================================================

const getNamesSortedByFriendsCount = (users) => {
  const namesSortedByFriendsCount = users
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    )
    .map((user) => user.name);

  return namesSortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(users));

//=====================================================

const getSortedUniqueSkills = (users) => {
  const uniqueSkills = [];
  users.forEach((user) =>
    user.skills.forEach((skill) => {
      !uniqueSkills.includes(skill) ? uniqueSkills.push(skill) : null;
    })
  );
  uniqueSkills.sort();

  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));