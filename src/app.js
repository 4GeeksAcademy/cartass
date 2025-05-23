import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  //write your code here
   const palos = ["diamond", "heart", "spade", "club"];
    const simbolosPalo = { diamond: "♦", heart: "♥", spade: "♠", club: "♣" };
    const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    function generarCarta() {
      const indicePalo = Math.floor(Math.random() * palos.length);
      const indiceValor = Math.floor(Math.random() * valores.length);

      const palo = palos[indicePalo];
      const simbolo = simbolosPalo[palo];
      const valor = valores[indiceValor];

      const carta = document.getElementById("carta");
      carta.className = `carta ${palo}`;
      carta.innerHTML = `
        <div class="simbolo-arriba">${simbolo}</div>
        <div class="valor-carta">${valor}</div>
        <div class="simbolo-abajo">${simbolo}</div>
      `;

      carta.onclick = generarCarta;
    }

    window.onload = function () {
      const carta = document.getElementById("carta");
      carta.onclick = generarCarta;
      generarCarta();
      setInterval(generarCarta, 10000);
    };