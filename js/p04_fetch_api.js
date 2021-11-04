"use strict"
const btnTxt = document.querySelector("#btn_txt");
const btnJSON = document.querySelector("#btn_json");
const btnAPI = document.querySelector("#btn_api");
const lblResultado = document.querySelector("#resultado");

btnTxt.addEventListener("click", function(e) {
    e.preventDefault();
    fetch("datos.txt")
    .then(res => res.text())
    .then(personas => lblResultado.innerHTML = personas)
    .catch(error => console.log(error))
});

btnJSON.addEventListener("click", function (e){
    e.preventDefault();
    fetch("empleados.json")
    .then(res => res.json())
    .then(personas => {
        console.log(personas);
        let lista = "<ul>";
        personas.forEach(persona =>{
            lista += `
            <li><b>Nombre:</b> ${persona.nombre},
            <b>puesto</b> ${persona.puesto}</li>
            `;
        });
        lista += "</ul>"
        lblResultado.innerHTML= lista;
    });
});

btnAPI.addEventListener("click", function (e) {
    e.preventDefault();
    fetch("https://picsum.photos/list")
    .then(res => res.json())
    .then(imagenes => {
        let lista = "<ul>";
        imagenes.forEach(imagen => {
            lista += `
            <li>
            <a target="_blank" href="${imagen.post_url}">
            Ver imagen </a>
            <b>Autor:</b> ${imagen.author}
            </li>
            `;
        });
        lista += "</ul>";
        lblResultado.innerHTML = lista;
    })
    .catch(error => console.log(error));
});