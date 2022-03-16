const userCard = document.getElementById("userCard");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
const userCardLists = document.querySelector(".userCardList");

const seachInput = document.getElementById("inputSearch");

let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      card = userCard.cloneNode(true);
      console.log(card);
      userName.textContent = user.name;
      email.textContent = user.email;
      userCardLists.after(card);
      return { name: user.name, email: user.email, element: card };
    });
  });

seachInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  console.log(users);
});
