import { guardarFav } from './guardarFav.js'
import { favoritos } from './getData.js';

let infoMascota = document.getElementById('infoMascota');
let fotoInfo = document.getElementById('fotoInfo');
let nombreMascota = document.getElementById('informacionNombre');
let clickFav = document.getElementById('clickFav')
let iconoInfo = document.getElementById('iconoInfo');
let razaInfo = document.getElementById('raza');
let edadinfo = document.getElementById('edad');
let direccionInfo = document.getElementById('direccion');
let imgPersonalidad1 = document.getElementById('imgPersonalidad1');
let imgPersonalidad2 = document.getElementById('imgPersonalidad2');
let imgPersonalidad3 = document.getElementById('imgPersonalidad3');
let carac1 = document.getElementById('carac1');
let carac2 = document.getElementById('carac2');
let carac3 = document.getElementById('carac3');
let tituloHistoria = document.getElementById('tituloHistoria')
let descripcion1 = document.getElementById('descripcion1')

const show = async () => {
    const data = await favoritos();
    const mascota = JSON.parse(localStorage.getItem('Mascota'))
    mascota.forEach(element =>{
        const {id, nombre, imgInfo, imgP1, imgP2, imgP3, raza, descripcion, direccion, edad, personalidad } = element;
        console.log(nombre);
        let nomRepetido = nombre.toLowerCase();
        let verificacion = data.filter(item => item.nombre.toLowerCase() === nomRepetido)
        console.log(verificacion);
        if (verificacion != 0) {
            let imgFav = '../images/iconoFavSeleccionado.png'
            clickFav.setAttribute('src',imgFav)
        }else{
            console.log('aun no existe');
        }

        nombreMascota.textContent = nombre;
        fotoInfo.style.background = `url('${imgInfo}') no-repeat`;
        razaInfo.textContent = raza;
        edadinfo.textContent = edad;
        direccionInfo.textContent = direccion;
        imgPersonalidad1.setAttribute('src', imgP1)
        imgPersonalidad2.setAttribute('src', imgP2)
        imgPersonalidad3.setAttribute('src', imgP3)
        carac1.textContent = personalidad[0];
        carac2.textContent = personalidad[1];
        carac3.textContent = personalidad[2];
        tituloHistoria.textContent += nombre;
        descripcion1.textContent = descripcion;
    })

}
document.addEventListener("DOMContentLoaded", (e) => {
    show()
    guardarFav()
})

let contactar = document.getElementById('contactar');
contactar.addEventListener("click", () => {
    console.log('funciona');
    window.location.href = "chat.html";
})