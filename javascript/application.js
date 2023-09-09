// console.log("Hello from JavaScript!");

// document.querySelector("#paragraph");

// document.getElementById("paragraph");

// const list = document.querySelector("#players");
// const element = list.querySelector(".red");
// console.log(element.innerText);

// const countries = document.querySelector("#fifa-wins li");
// console.log(countries);

// const list = document.querySelector("#fifa-wins");
// list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// const team = document.querySelector('#fifa-wins li');
// team.classList.add("red");
// +
// team.classList.remove("red");
// =>
// team.classList.toggle("red");

// const emailInput = document.querySelector("#email");
// emailInput.value = "george@gmail.com";
// console.log(emailInput.value);

const home = document.querySelector("#home");
console.log(home.innerHTML);
console.log(home.innerText);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!";
home.innerText = "Le Wagon rules!"