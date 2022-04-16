import { urlMensajes } from './helpers.js'

let textoChat = document.getElementById('textoChat');

export const enviarMensaje = () => {
    let hora1 = new Date()
    textoChat.addEventListener('change', async (e) => {
        e.preventDefault()
        const mensaje = e.target.value;
        const hora = hora1.getHours()
        const minutos = hora1.getMinutes()
        const objetoMensaje = {
            mensaje,
            hora,
            minutos
        }
        await fetch (urlMensajes, { 
            method: 'POST',
            body: JSON.stringify(objetoMensaje),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
    })
}