const body=document.body
var id = 0
//CREO EL CONTENEDOR DE ALERTAS, ASIGNO CLASE Y SE COLOCA AL PRINCIPIO DEL BODY
const alertContainer = document.createElement('div')
alertContainer.classList.add('alert-container')
alertContainer.dataset.alertContainer=true
body.prepend(alertContainer)

//CREO EL CONTENEDOR DE VELO, ASIGNO CLASE Y SE COLOCA AL PRINCIPIO DEL BODY
const veil = document.createElement('div')
veil.dataset.veilContainer=true
body.prepend(veil)

/**
 * Muestra un mensaje en pantalla por tiempo determinado
 * 
 * @param {string} msg Mensaje a mostrar
 * @param {boolean} locking Bloqueo o no de interfaz mientras se muestra mensaje
 * @param {ms} duration Tiempo en ms que durará el mensaje
 * @returns null
 */
function showAlert(msg,duration=1500,locking=false,){
    const alertContainer = document.querySelector('[data-alert-container]')
    const alertDiv = document.createElement('div')
    
    alertDiv.textContent=msg
    alertDiv.dataset.alertId=id++
    alertDiv.classList.add('alert')
    alertContainer.prepend(alertDiv)

    //SI LA DURACIÓN ES NULL, NO SE QUITA EL MENSAJE Y SE COLOCA CON UNA TRANSPARENCIA DE 50%
    if (duration==null){
        const fadeAlert = document.querySelector(`[data-alert-id="${id-1}"]`)
        fadeAlert.style.opacity='0.5'
    }
    //SI EXISTE CONDICION DE "LOCKING" BLOQUEA EL BODY CON UN VELO
    if (locking){
        body.style.overflow='hidden'
        const veil = document.querySelector('[data-veil-container]')
        veil.classList.add('alert-veil')
    }
    //DESPUÉS DE ${duration} ELIMINA EL ALERT
    setTimeout(()=>{
        alertDiv.classList.add('hide')
        alertDiv.addEventListener("transitionend",()=>{
            alertDiv.remove()
            if(locking){
                const veil = document.querySelector('[data-veil-container]')
                veil.classList.remove('alert-veil')
                body.style.overflow=''
            }
        })
    },duration)
}