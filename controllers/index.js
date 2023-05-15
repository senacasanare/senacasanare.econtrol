import {
  search_aprendiz, 
  search_elemento,
  search_opc1,
  search_opc2,
  act_elemento1,
  act_elemento2,
  act_elemento3
} from "./global.js";

const btnbuscar = document.getElementById('btnsearch')
const contenedor = document.getElementById('container')
const elemento1 = document.getElementById('elemento1')
const elemento2 = document.getElementById('elemento2')
const elemento3 = document.getElementById('elemento3')

const f = new Date()
const now = f.toLocaleString();


setInterval("location.reload()",60000);

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
  location.reload();
})

async function verification()
{
  
  const cedula = document.getElementById('Inputcedula').value
  

  const docRef = search_aprendiz(cedula)
  const docSnap = await docRef

  const Refelemen = search_elemento(cedula)
  const esearch = await Refelemen

  const Refopc = search_opc1(cedula)
  const opcsearch1 = await Refopc

  const Refopc2 = search_opc2(cedula)
  const opcsearch2 = await Refopc2

  if(docSnap.exists())
  {
      console.log("congratulations: ",docSnap.data());
      let html=""
      html += `
      <div class="card">
        <img src="${docSnap.data().perfil}" class="card-img-top">
        <h5 class="rol" >${docSnap.data().trol}</h5>
        <div class="card-body">
          <h5 class="card-title">${docSnap.data().nom}</h5>
          <p class="card-text">${docSnap.data().tdoc} ${docSnap.data().numdoc}</p>
          <p>Ficha: ${docSnap.data().ficha} ${docSnap.data().titulada}</p>
          <p>Regional: Casanare</p>
        </div>
        <img src="../images/logo_SENA.png" class="imglogo">
      </div>  
    `
    contenedor.innerHTML=html
    }
    if(esearch.exists())
    {
      console.log("congratulations: ",esearch.data());
      let html1=""
      html1 += `
      <div class="card">
        <div class="card-body">
          <h5 class="tipo1" data-id='${esearch.data().tipo}'>Tipo: ${esearch.data().tipo}</h5>
          <h6 class="marca1" data-id='${esearch.data().marca}'>Marca: ${esearch.data().marca}</h6>
          <p class="referencia1" data-id='${esearch.data().referencia}'>Referencia: ${esearch.data().referencia}</p>
          <div>
            <input type="radio" id="entrada" name="contact1" value="Entrada">
            <label for="email">Entrada</label>
            <br>
            <input type="radio" id="salida" name="contact1" value="Salida">
            <label for="phone">Salida</label>
          </div>
          <p class="fecha1" data-id='${now}'>${now}</p>
          <button class="btn-update" data-id="${docSnap.data().numdoc}">Actualizar</button>
        </div>  
      </div>
      `
      elemento1.innerHTML = html1
    }
    if(opcsearch1.exists())
    {
      console.log("congratulations: ",opcsearch1.data());
      let html2=""
      html2 +=`
      <div class="card">
        <div class="card-body">
          <h5 class="tipo1" data-id='${opcsearch1.data().tipo}'>Tipo: ${opcsearch1.data().tipo}</h5>
          <h6 class="marca1" data-id='${opcsearch1.data().marca}'>Marca: ${opcsearch1.data().marca}</h6>
          <p class="referencia1" data-id='${opcsearch1.data().referencia}'>Referencia: ${opcsearch1.data().referencia}</p>
          <div>
            <input type="radio" id="entrada" name="contact2" value="Entrada">
            <label for="email">Entrada</label>
            <br>
            <input type="radio" id="salida" name="contact2" value="Salida">
            <label for="phone">Salida</label>
          </div>
          <p class="fecha1" data-id='${now}'>${now}</p>
          <button class="btn-update" data-id="${docSnap.data().numdoc}">Actualizar</button>
        </div> 
      </div>    
      `
      elemento2.innerHTML = html2
    }
    if(opcsearch2.exists())
    {
      console.log("congratulations: ",opcsearch2.data());
      let html3=""
      html3 += `
      <div class="card">
        <div class="card-body">
          <h5 class="tipo1" data-id='${opcsearch2.data().tipo}'>Tipo: ${opcsearch2.data().tipo}</h5>
          <h6 class="marca1" data-id='${opcsearch2.data().marca}'>Marca: ${opcsearch2.data().marca}</h6>
          <p class="referencia1" data-id='${opcsearch2.data().referencia}'>Referencia: ${opcsearch2.data().referencia}</p>
          <div>
            <input type="radio" id="entrada" name="contact3" value="Entrada">
            <label for="email">Entrada</label>
            <br>
            <input type="radio" id="salida" name="contact3" value="Salida">
            <label for="phone">Salida</label>
          </div>
          <p class="fecha1" data-id='${now}'>${now}</p>
          <button class="btn-update" data-id="${docSnap.data().numdoc}">Actualizar</button>
        </div>
      </div>
      `
      elemento3.innerHTML = html3

    }
    else
    {
      console.log("failure");
    }

    var idctr1=''
    var vfecha1=''
    var t1=''
    var m1=''
    var r1=''
    var el = elemento1.querySelector('.btn-update');
    var fecha1= elemento1.querySelector('.fecha1');
    var tipo1 = elemento1.querySelector('.tipo1');
    var marca1 = elemento1.querySelector('.marca1');
    var ref1 = elemento1.querySelector('.referencia1');
    vfecha1=fecha1.dataset.id
    t1=tipo1.dataset.id
    m1=marca1.dataset.id
    r1=ref1.dataset.id

    

    el.addEventListener('click',({target: { dataset }})=>{
      idctr1=dataset.id
      var value = $("input[type=radio][name=contact1]:checked").val();
        if (value) {
          act_elemento1(idctr1,m1,t1,r1,vfecha1,value) 
          alert("El elemento 1 se actualizo")
        }
        else {
            alert('Nothing is selected');
        }
      
      
    });

    var idctr2=''
    var vfecha2=''
    var t2=''
    var m2=''
    var r2=''
    var el2 = elemento2.querySelector('.btn-update');
    var fecha2= elemento2.querySelector('.fecha1');
    var tipo2 = elemento2.querySelector('.tipo1');
    var marca2 = elemento2.querySelector('.marca1');
    var ref2 = elemento2.querySelector('.referencia1');
    vfecha2=fecha2.dataset.id
    t2=tipo2.dataset.id
    m2=marca2.dataset.id
    r2=ref2.dataset.id

    

    el2.addEventListener('click',({target: { dataset }})=>{
      idctr2=dataset.id
      var value1 = $("input[type=radio][name=contact2]:checked").val();
        if (value1) {
          act_elemento2(idctr2,m2,t2,r2,vfecha2,value1) 
          alert("El elemento 2 se actualizo")
        }
        else {
            alert('Nothing is selected');
        }
      
      
    });

    //////////////////////////////////////////////////
    var idctr3=''
    var vfecha3=''
    var t3=''
    var m3=''
    var r3=''
    var el3 = elemento3.querySelector('.btn-update');
    var fecha3= elemento3.querySelector('.fecha1');
    var tipo3 = elemento3.querySelector('.tipo1');
    var marca3 = elemento3.querySelector('.marca1');
    var ref3 = elemento3.querySelector('.referencia1');
    vfecha3=fecha3.dataset.id
    t3=tipo3.dataset.id
    m3=marca3.dataset.id
    r3=ref3.dataset.id

    

    el3.addEventListener('click',({target: { dataset }})=>{
      idctr3=dataset.id
      var value2 = $("input[type=radio][name=contact3]:checked").val();
        if (value2) {
          act_elemento3(idctr3,m3,t3,r3,vfecha3,value2) 
          alert("El elemento 3 se actualizo")
        }
        else {
            alert('Nothing is selected');
        }
      
      
    });
}



window.addEventListener('DOMContentLoaded', async() => {

  if(btnbuscar)
  {
    btnbuscar.addEventListener('click',verification);
  }
  
})
