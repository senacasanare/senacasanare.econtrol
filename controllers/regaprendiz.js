import {regaprendiz} from "./global.js"

window.addEventListener('DOMContentLoaded',() => {
 
})

const formulario = document.getElementById('fregistro')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    const doc = formulario['Selectdoc']
    const ndoc= formulario['Inputdocumento']
    const nombre = formulario['Inputnombre']
    const rh = formulario['Selectrh']
    const ficha = formulario['Inputficha']
    const titulada = formulario['Inputtitulada']
    const jornada = formulario['Selectjornada']
    const sede = formulario['Selectsede']
    const avatar = formulario['response']

    regaprendiz(
        doc.value,
        ndoc.value,
        nombre.value,
        rh.value,
        ficha.value,
        titulada.value,
        jornada.value,
        sede.value,
        avatar.value)

    alert("El registro se completo correctamente")
    formulario.reset()
})