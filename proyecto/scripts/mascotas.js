//importo las funciones de getData
import { getGatos } from "./getData.js";
import { getPerros } from "./getData.js";
import { showMascotas1 } from "./showMascotas.js"
import { showMascotas2 } from "./showMascotas.js"

let mostrar = document.getElementById('cards-perro-gatos');
let showP = document.getElementById('showP');
let showG = document.getElementById('showG');
let botonPerro = document.getElementById('botonPerro');
let botonGato = document.getElementById('botonGato');

//se llama la funcion showDogs
export const mascotasPerro = () => {
    botonPerro.addEventListener('click', async (e) => {
        e.preventDefault();
        showG.innerHTML = '';
        const perros = await getPerros();
        showMascotas1(perros, showP);
        botonPerro.style.opacity = '1';
        botonGato.style.opacity = '0.5';
    });
}
export const mascotasGato = () => {
    botonGato.addEventListener('click', async (e) => {
        e.preventDefault();
        showP.innerHTML = '';
        const gatos = await getGatos();
        showMascotas2(gatos, showG);
        botonGato.style.opacity = '1';
        botonPerro.style.opacity = '0.5';
    })
}

