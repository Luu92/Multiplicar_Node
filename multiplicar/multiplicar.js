const fs = require("fs");

let listarTabla = (base, limite = 10) => {
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número!!`);
      return;
    }

    let datos = "";

    for (let i = 1; i <= limite; i++) {
      datos += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/Tabla ${base}-al-${limite}.txt`, datos, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}`);
    });
  });
};

//Exportamos la variable crearArchivo, listarTabla y ocupamos en app.js
module.exports = {
  crearArchivo,
  listarTabla,
};
