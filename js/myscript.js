var nome;

nome = prompt("Qual è il tuo nome?");
console.log(nome);

var surname;

surname = prompt("Qual è il tuo cognome?");
console.log(surname);

var fav_color;

fav_color = prompt("Qual è il tuo colore preferito?");
console.log(fav_color);

document.getElementById("my_id").innerHTML = nome + surname + fav_color + 19;
console.log(document.getElementById ("my_id").innerHTML);