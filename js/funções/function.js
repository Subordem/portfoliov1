let triangulo = document.getElementById("triangulo");
var svgNS = "http://www.w3.org/2000/svg";

lado = screen.width * 1;
let valor, valor2;
lado2 = screen.width * 1;
if (screen.width < 600) {
  valor2 = lado + ",0 " + lado + "," + lado + " 0,300";
} else {
  valor2 = lado + ",-3 " + lado + "," + lado + " 0,300";
}

valor = "0,0 0,290 " + lado + ",290";
let dentroTri1 = document.createElementNS(svgNS, "polygon");
let dentroTri2 = document.createElementNS(svgNS, "polygon");

dentroTri2.setAttributeNS(null, "points", valor2);
dentroTri1.setAttributeNS(null, "points", valor);
dentroTri1.setAttributeNS(null, "fill", "#000000");
dentroTri2.setAttributeNS(null, "fill", "#000000");
triangulo.appendChild(dentroTri1);
triangulo.appendChild(dentroTri2);

console.log(triangulo);

let raio = document.getElementById("raio");
let m = document.getElementById("m");
let a = document.getElementById("a");
let i = document.getElementById("i");
let n = document.getElementById("n");

// mexer raio

const onMouseMove = (e) => {
  raio.style.transform =
    "translate(" +
    (-(e.pageX * 0.0027) - 50) +
    "%," +
    (-(e.pageY * 0.0027) - 50) +
    "%)";

  m.style.transform =
    "translate(" + -(e.pageX * 0.003) + "%," + -(e.pageY * 0.003) + "%)";
  a.style.transform =
    "translate(" + -(e.pageX * 0.003) + "%," + -(e.pageY * 0.003) + "%)";
  i.style.transform =
    "translate(" + -(e.pageX * 0.003) + "%," + -(e.pageY * 0.003) + "%)";
  n.style.transform =
    "translate(" + -(e.pageX * 0.003) + "%," + -(e.pageY * 0.003) + "%)";
};

// let count = 0,
//   lastScrollTop = 0;

document.addEventListener("mousemove", onMouseMove);

// window.addEventListener(
//   "scroll",
//   function (e) {
//     // mesma posição
//     console.log(m.style.transform);
//     if (e.scrollY === lastScrollTop) return;

//     if (this.scrollY < lastScrollTop) {
//       m.style.transform = "translateY(" + count + "%)";
//       count += 1;
//       console.log("cima");
//     } else {
//       if (count < 50) {
//         count -= 1;
//       }

//       console.log("baixo");
//       m.style.transform = "translateY(" + count + "%)";
//     }

//     lastScrollTop = this.scrollY;

//     console.log(count);
//   },
//   true
// );

// const posiPag = (e) => {
//   console.log(e.pageY);
// };

// window.addEventListener("scroll", posiPag);

function type(elemento) {
  const textArray = elemento.innerHTML.split("`");
  elemento.innerHTML = "";
  textArray.forEach((linha, i) => {
    setTimeout(() => {
      elemento.innerHTML += linha;
    }, 100 * i);
  });
}

const texto = document.getElementById("p-login");

type(texto);

// posicoes = texto.getBoundingClientRect();

// console.log(posicoes);
// if (posicoes.y >= 519) {
//   alert("ihul");
// }

//// logica cards

var cards = new Array();

cards[0] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.C</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/c.png" alt="linguagem c" />
  </div>
  <p>C</p>
</div>
</div>

`;

cards[1] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.C#</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/cS.png" alt="linguagem c#" />
  </div>
  <p>C#</p>
</div>
</div>


`;

cards[2] = `

<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.Java</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/java.png" alt="linguagem java" />
  </div>
  <p>Java</p>
</div>
</div>

`;

cards[3] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.html</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/html.png" alt="html" />
  </div>
  <p>Html</p>
</div>
</div>
`;

cards[4] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.css</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/css.png" alt="css" />
  </div>
  <p>css</p>
</div>
</div>
`;

cards[5] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.js</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/js.png" alt="js" />
  </div>
  <p>js</p>
</div>
</div>

`;

cards[6] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.git</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/git.png" alt="git" />
  </div>
  <p>git</p>
</div>
</div>

`;

cards[7] = `
<div class="card">
<div class="head-card">
  <div class="titulo">
    <p>.node</p>
  </div>
  <div class="botoes">
    <i class="fas fa-times"></i>
  </div>
</div>
<div class="body-card">
  <div class="logo">
    <img src="../img/node.png" alt="node" />
  </div>
  <p>node</p>
</div>
</div>

`;

cards[8] = `<div class="card">
          <div class="head-card">
            <div class="titulo">
              <p>.figma</p>
            </div>
            <div class="botoes">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <div class="body-card">
            <div class="logo">
              <img src="../img/figma.png" alt="figma" />
            </div>
            <p>figma</p>
          </div>
        </div>`;

function aparecer(c) {
  cards.forEach((card, i) => {
    setTimeout(() => {
      c.innerHTML += card;
    }, 300 * i);
  });
}

const cardBox = document.getElementById("cards");

aparecer(cardBox);

document.getElementById("submit").addEventListener("click", () => {
  alert("oops, ainda estamos em construção da página");
});
