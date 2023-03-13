import {regelemento,regopcional1,regopcional2} from "./global.js"

window.addEventListener('DOMContentLoaded',() => {
 
})

const formulario = document.getElementById('fregelemento')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    const tdoc = formulario['Selectdoc']
    const ndoc= formulario['Inputdocumento']
    const tipo = formulario['Select_tipo']
    const marca = formulario['Inputmarca']
    const referencia = formulario['Inputref']
    const fecha = formulario['Inputfecha']
    const estado = formulario['Inputestado']

    const opc = formulario['Select_opc'].value

    if(opc == 1)
    {
        regelemento(
            ndoc.value,
            marca.value,
            tipo.value,
            referencia.value,
            fecha.value,
            estado.value)

            alert("El elemento 1 se registro correctamente")
            formulario.reset()
    }

    if(opc == 2)
    {
        regopcional1(
            ndoc.value,
            marca.value,
            tipo.value,
            referencia.value,
            fecha.value,
            estado.value)

            alert("El elemento 2 se registro correctamente")
            formulario.reset()
    }

    if(opc == 3)
    {
        regopcional2(
            ndoc.value,
            marca.value,
            tipo.value,
            referencia.value,
            fecha.value,
            estado.value)

            alert("El elemento 3 se registro correctamente")
            formulario.reset()
    }
    
})