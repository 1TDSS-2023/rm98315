"use strict";
// console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Strings e realizando o parse com a
// //função parseInt...;
// console.log(parseInt(nr1)+parseInt(nr2));

// var nome1 = "Dubas";
// // let nome2 = "Serbatinho";
// // const nome3 ="Julia";
// nome = "Ale";
// console.log(nome);

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);

/* <button vallue ="click" id="beu-btn">Click</button> */
const btn = document.getElementById("meu-btn");

// PRIMEIRO PASSO PARA TRANSFORMAÇÃO PARA O BOTÃO EM RGB...
btn.addEventListener("click", function(){
    // console.log(this.textContent);
    // função matematica math
    // random = retorna um numero aleatorio entre 0 e 1: exemplo 0.638452345
    //  floor = arredondao numero para baixo
    //  ceil = arredonda o numeor para cima
    //  round = arredonda o numero aleatoriamente

    let r=0, g=0, b=0
    
    r = Math. round(Math.random() * 255);
    g = Math. round(Math.random() * 255);
    b = Math. round(Math.random() * 255);

    // this.setAttribute("style", "background-color:rgb("+r+", "+g+", "+b+");");
    this.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b});`);
 
} );

/*<h2 class="tit-sec">Seção de fotos</h2>*/

const h2Element = document.querySelector(".tit-sec")

console.log(h2Element);

// quarySelectorAll()