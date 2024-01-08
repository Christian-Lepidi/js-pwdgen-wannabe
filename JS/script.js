const name = prompt("Qual è il tuo nome?");
console.log(name);
const lastName = prompt("Qual è il tuo cognome?");
console.log(lastName);
const favoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(favoriteColor);
document
  .getElementById("data")
  .innerText("name + lastName + favoriteColor + 23");
