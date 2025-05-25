
//import { leerSuperheroes } from './utils.mjs';

// Leer y mostrar la lista de superhéroes ordenada
//const superheroes = leerSuperheroes('./superheroes.txt');
//console.log('Superhéroes ordenados:');
//console.log(superheroes); 


//2---


//import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; //  //MODIFICO


//import { agregarSuperheroes } from './utils.mjs';

// Agregar superhéroe del archivo
//agregarSuperheroes('./superheroes.txt', './agregarSuperheroes.txt');



// Leer y mostrar la lista de superhéroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados:');
console.log(superheroes);

//  AGREGADO: Definir un nuevo superhéroe

//const nuevoHeroe = {
 // id: 41,
 // nombreSuperheroe: 'Capitana Marvel',
 // nombreReal: 'Carol Danvers',
 // nombreSociedad: 'Avengers',
 // edad: 35,
//  planetaOrigen: 'Tierra',
 // debilidad: 'Control emocional',
//  poder: ['Vuelo', 'Energía cósmica'],
 // habilidadEspecial: 'Explosiones fotónicas',
 // aliado: ['Nick Fury'],
 // enemigo: ['Ronan el Acusador']
//};

//  AGREGADO: Llamar a la función para agregar el nuevo héroe
//const heroesActualizados = agregarSuperheroes('./superheroes.txt', //nuevoHeroe);
//console.log('Superhéroes actualizados:');
//console.log(heroesActualizados); //  AGREGADO

//3-----

//import { agregarSuperheroes, leerSuperheroes } from './utils.mjs';

// Agrega el superhéroe desde 'agregarSuperheroes.txt' a //'superheroes.txt'
//agregarSuperheroes('./superheroes.txt', './agregarSuperheroes.txt');

// Mostrar la lista actualizada
//const superheroes = leerSuperheroes('./superheroes.txt');
//console.log('🦸‍♂️ Superhéroes actualizados:');
//console.log(superheroes);

//**3***
import fs from 'fs';
import { agregarSuperheroes, leerSuperheroes } from './utils.mjs';

// Leer el nuevo superhéroe o lista de superhéroes desde el archivo externo
const nuevoHeroeData = fs.readFileSync('./agregarSuperheroes.txt', 'utf8');
const nuevoHeroe = JSON.parse(nuevoHeroeData);

// 🔧 CORRECCIÓN: Verificamos si el archivo contiene un solo héroe o un array
if (Array.isArray(nuevoHeroe)) {
  // 🔁 Si es un array, agregamos cada uno por separado
  nuevoHeroe.forEach(h => agregarSuperheroes('./superheroes.txt', h));
} else {
  // ➕ Si es solo uno, lo agregamos directamente
  agregarSuperheroes('./superheroes.txt', nuevoHeroe);
}

// Leer y mostrar la lista de superhéroes actualizada
const listaActualizada = leerSuperheroes('./superheroes.txt');
console.log('🦸‍♂️ Superhéroes actualizados:');
console.log(listaActualizada);
