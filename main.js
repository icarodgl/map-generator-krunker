var fs = require("fs");
var mapa = require("./modelo");
const tamanho = 4;
var objetos = [
  { p: [0, 0, 0], s: [57, 26, 25],  id: 19 },
  { p: [0, 0, 0], s: [12, 12, 12],  id: 1 },
  { p: [0, 0, 0], s: [51, 15, 20],  id: 7 },
  { p: [0, 0, 0], s: [6, 8, 6],     id: 2 },
  { p: [0, 0, 0], s: [5, 9, 5],     id: 20 },
  { p: [0, 0, 0], s: [12, 12, 12],  id: 8 }
];
async function x() {
  for (let i = -1 * tamanho; i !== tamanho + 1; i++) {
    for (let j = -1 * tamanho; j !== tamanho + 1; j++) {
      let selecionado = objetos[Math.floor(Math.random() * objetos.length)];
      let p = [i * 30 + 10, Math.round(Math.random() * 200), j * 30 + 10];
      let objeto = { p: Array, s: Array, r: Array, id: Number };

      objeto.p = p;
      objeto.s = selecionado.s;
      objeto.r = [0, Math.floor(Math.random() * 5), 0];
      objeto.id = selecionado.id;
      mapa.objects.push(objeto);
      if (i == tamanho) {
        mapa.spawns.push([objeto.p[0], objeto.p[1] + 25, objeto.p[2], 2]);
      }
      if (i == -1 * tamanho) {
        mapa.spawns.push([objeto.p[0], objeto.p[1] + 25, objeto.p[2], 1]);
      }
    }
  }

  fs.writeFile("mapa.json", JSON.stringify(mapa));
  console.log("feito");
}
x();
