import Base from './base.js';
import List from './list.js';

let list= new List();

let btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let name= document.getElementById('txtName').value;
    let minutes= Number(document.getElementById('txtMinutes').value);

    if(!name || !minutes){
        document.getElementById('details').innerHTML=
        `<p>Se requieren todos los datos</p>`;
    } else {
        let base= new Base(name, minutes);
        list.add(base);
        document.getElementById('details').innerHTML=
        `<p>La base ${base.getName()} ha sido agregada correctamente</p>`;
        console.log(list.length);
    }
})

let btnDelete=document.getElementById('btnDelete');
btnDelete.addEventListener('click', () => {
    let name=document.getElementById('txtName').value;
    let delBase= list.delete(name);

    if(delBase){
        document.getElementById('details').innerHTML=
        `<p> Se ha eliminado la base ${name}. </p>`
    } else if(!name){
        document.getElementById('details').innerHTML=
        `<p> Ingrese el nombre de una base.</p>`
    } else{
        document.getElementById('details').innerHTML=
        `<p> Esta base no existe. </p>`
    }
    console.log(list.length);
})

let btnList=document.getElementById('btnList');
btnList.addEventListener('click', () => {
    let btnlist= list.list();
    document.getElementById('details').innerHTML=
    `<br> ${btnlist} </br>`
})

let btnCreateCard=document.getElementById('btnCreateCard');
btnCreateCard.addEventListener('click', () => {
    let name= document.getElementById('txtNameCard').value;
    let hour= Number(document.getElementById('txtHourCard').value);
    let minutes= Number(document.getElementById('txtMinutesCard').value);
    let card= list.createCard(name, hour, minutes);

    if(!list){
        document.getElementById('details').innerHTML=
        `<p> No hay bases registradas. </p>`
    } else if (!card){
        document.getElementById('details').innerHTML=
        `<p> La base ${name} no existe. </p>`
    } else{
        document.getElementById('details').innerHTML=
        `<p> La ruta ha comenzado en la base: ${name}.</p>`
        document.getElementById('details').innerHTML=
        `<p> Recorrido:</p>` + `<p>${card}</p>`
    }
})