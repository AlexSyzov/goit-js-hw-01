const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userInfo = Object.keys(user);

for (const item of userInfo) {
  console.log(`${item}: ${user[item]}`);
}