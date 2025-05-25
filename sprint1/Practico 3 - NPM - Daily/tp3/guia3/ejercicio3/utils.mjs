//import fs from 'fs';

 // Clase para representar un Superhéroe
//class Superheroe {
  //constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,
           //   planetaOrigen, debilidad, poder, habilidadEspecial, //aliado,
     //         enemigo) {
  //  this.id = id;
   // this.nombreSuperheroe = nombreSuperheroe;
   // this.nombreReal = nombreReal;
   // this.nombreSociedad = nombreSociedad;
    //this.edad = edad;
    //this.planetaOrigen = planetaOrigen;
  // this.debilidad = debilidad;
   //this.poder = poder;
   //this.habilidadEspecial = habilidadEspecial;
 //  this.aliado = aliado;
   // this.enemigo = enemigo;
 // }
//}

// ✅ FUNCIÓN EXISTENTE — leer y ordenar superhéroes
//export function leerSuperheroes(ruta) {
 // const datos = fs.readFileSync(ruta, 'utf8');
 // const superheroesArray = JSON.parse(datos);

  //const superheroes = superheroesArray.map(hero => 
   // new Superheroe(
     // hero.id,
    //  hero.nombreSuperheroe,
     // hero.nombreReal,
     // hero.nombreSociedad,
     // hero.edad,
     // hero.planetaOrigen,
     // hero.debilidad,
    // hero.poder,
     // hero.habilidadEspecial,
    //  hero.aliado,
    //  hero.enemigo
  //  )
  //);

 // superheroes.sort((a, b) =>
  //  a.nombreSuperheroe.localeCompare(b.nombreSuperheroe)
  //);

 // return superheroes;
//}



// ✅ FUNCIÓN NUEVA — Agregar un superhéroe leyendo desde un archivo
// ⚠️ MODIFICADA: ahora recibe 2 rutas (como pide la consigna)
//export function agregarSuperheroes(archOriginal, archNuevo) {
  // Leer la lista original de superhéroes
 // const datosActuales = fs.readFileSync(archOriginal, 'utf8');
 // const listaSuperheroes = JSON.parse(datosActuales);

  // Leer el nuevo superhéroe desde otro archivo
 // const datosNuevos = fs.readFileSync(archNuevo, 'utf8');
 // const nuevoHeroe = JSON.parse(datosNuevos);

  // Agregarlo a la lista
  //listaSuperheroes.push(nuevoHeroe);

  // Guardar la nueva lista en el archivo original
  //fs.writeFileSync(archOriginal, JSON.stringify(listaSuperheroes, //null, 2), 'utf8');

 // console.log('✅ Superhéroe agregado correctamente:', //nuevoHeroe.nombreSuperheroe);
// }


//  cambio////


//export function agregarSuperheroes(archOriginal, nuevoHeroe) {
  //const datosActuales = fs.readFileSync(archOriginal, 'utf8');
  //const listaSuperheroes = JSON.parse(datosActuales);

//  listaSuperheroes.push(nuevoHeroe); // ya es un objeto, no hay que //parsear nada

 // fs.writeFileSync(archOriginal, JSON.stringify(listaSuperheroes, //null, 2), 'utf8');

 // console.log('✅ Superhéroe agregado correctamente:', //nuevoHeroe.nombreSuperheroe);
// }


// ///-------modicacion con if--***--*-*-*

//export function agregarSuperheroes(archOriginal, nuevoHeroe) {
  // Leer la lista original
 // const datosActuales = fs.readFileSync(archOriginal, 'utf8');
 // const listaSuperheroes = JSON.parse(datosActuales);

  // 1. Evitar duplicados por nombreSuperheroe (ignorando mayúsculas)
 // const existe = listaSuperheroes.some(
 //   h => h.nombreSuperheroe.toLowerCase() === //nuevoHeroe.nombreSuperheroe.toLowerCase()
//  );

 // if (existe) {
   // console.log(`⚠️ El superhéroe "${nuevoHeroe.nombreSuperheroe}" ya //existe. No se agregó.`);
  //  return; // Sale sin modificar nada
 // }

  // 2. Asignar un ID único automáticamente (el máximo actual + 1)
 // const maxId = listaSuperheroes.reduce((max, h) => (h.id > max ? h.id //: max), 0);
//  nuevoHeroe.id = maxId + 1;

  // 3. Agregar el nuevo superhéroe
  //listaSuperheroes.push(nuevoHeroe);

  // 4. Guardar el archivo actualizado
//  fs.writeFileSync(archOriginal, JSON.stringify(listaSuperheroes, //null, 2), 'utf8');

  //console.log('✅ Superhéroe agregado correctamente:', //nuevoHeroe.nombreSuperheroe);
//}

import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe {
  constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,
              planetaOrigen, debilidad, poder, habilidadEspecial, aliado,
              enemigo) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

// Función para leer y ordenar superhéroes
export function leerSuperheroes(ruta) {
  const datos = fs.readFileSync(ruta, 'utf8');
  const superheroesArray = JSON.parse(datos);

  const superheroes = superheroesArray.map(hero =>
    new Superheroe(
      hero.id,
      hero.nombreSuperheroe,
      hero.nombreReal,
      hero.nombreSociedad,
      hero.edad,
      hero.planetaOrigen,
      hero.debilidad,
      hero.poder,
      hero.habilidadEspecial,
      hero.aliado,
      hero.enemigo
    )
  );

  superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

  return superheroes;
}

// Función para agregar un superhéroe, evitando duplicados y asignando id automáticamente
export function agregarSuperheroes(archOriginal, nuevoHeroe) {
  const datosActuales = fs.readFileSync(archOriginal, 'utf8');
  const listaSuperheroes = JSON.parse(datosActuales);

  // Evitar duplicados por nombreSuperheroe (ignorar mayúsculas/minúsculas)
  const existe = listaSuperheroes.some(
    h => h.nombreSuperheroe.toLowerCase() === nuevoHeroe.nombreSuperheroe.toLowerCase()
  );

  if (existe) {
    console.log(`⚠️ El superhéroe "${nuevoHeroe.nombreSuperheroe}" ya existe. No se agregó.`);
    return;
  }

  // Asignar ID único (máximo ID actual + 1)
  const maxId = listaSuperheroes.reduce((max, h) => (h.id > max ? h.id : max), 0);
  nuevoHeroe.id = maxId + 1;

  // Agregar nuevo héroe
  listaSuperheroes.push(nuevoHeroe);

  // Guardar lista actualizada
  fs.writeFileSync(archOriginal, JSON.stringify(listaSuperheroes, null, 2), 'utf8');

  console.log('✅ Superhéroe agregado correctamente:', nuevoHeroe.nombreSuperheroe);
}




