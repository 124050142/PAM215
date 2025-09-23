// Ejercicio C.
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 } 
];
 const busqueda = personas.find(persona => persona.nombre === "Luis" );
console.log(busqueda);

personas.forEach(persona => {console.log(persona.nombre + " tiene " + persona.edad)})

const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);

console.log("Total de edades: " + totalEdad);
