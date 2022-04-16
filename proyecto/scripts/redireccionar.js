import { getPerros } from './getData.js';
import { getGatos } from './getData.js';
let cards = document.getElementById('cards-perro-gatos');

export const redireccionar = () => {
    cards.addEventListener('click', async (e) => {
        const boton1 = e.target.classList.contains('perro-fondo');
        const boton2 = e.target.classList.contains('gato-fondo');
        const id = e.target.id
        if (boton1) {
                console.log('funciona');
                const infoMascota = await getPerros();
                const info = infoMascota.filter(item=>item.id === Number(id));
                localStorage.setItem("Mascota", JSON.stringify(info))
                window.location.href = "infoMascotaPerro.html";
        }
        else if(boton2){
            console.log('tambien funciona');
            const infoMascota = await getGatos();
            const info = infoMascota.filter(item=>item.id === Number(id));
            localStorage.setItem("Mascota", JSON.stringify(info))
            window.location.href = "infoMascotaGato.html";
        }
    })
}


