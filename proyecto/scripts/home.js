import { mascotasPerro } from './mascotas.js';
import { mascotasGato } from './mascotas.js';
import { redireccionar } from './redireccionar.js';

const mascotas = document.getElementById('botonMascota');

//home
const home = () => {
    mascotas.addEventListener('submit', mascotasPerro())
    mascotas.addEventListener('submit', mascotasGato())
}
home()
redireccionar()