import { getProduct } from "../helper/getProduct.js";
import { pintarProduct } from "../module/pintarProduct.js";
  import {setCarrito,controladorBoton  }  from '../module/pintarCarrito.js'
//  import { controladorBoton }  from '../module/controladorBoton.js'
let boton1 = document.querySelector("itemb");
let frutaCon = document.getElementById('contenedorFrutas');
let lecheCon = document.getElementById('contenedorLeche');
let starCon=document.getElementById('contenedorStar')
let conBus=document.getElementById('contenedorBusqueda')
contenedorBusqueda

let manga = document.getElementById('manga');
let leche = document.getElementById('consola');
 let todito = document.getElementById('todo');
let startw=document.getElementById('start');
const modal1 = document.getElementById("modal1");  
// console.log(boton1)
let template = document.getElementById("template-card").content;
let fragment = document.createDocumentFragment();
let itm = document.getElementById("contendor");
let items = document.getElementById("items");
// let templateFooter = document.getElementById('template-footer').content
// let footer = document.getElementById('footer')

// const templateCarrito = document.getElementById('template-carrito').content
let categorias = document.getElementById("categoria");

let buscador = document.getElementById("buscador");
let url = "http://localhost:3000/articulos";
let data=[];
let carrito = {};
// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     data = await getProduct(url);
//     pintarProduct(data, template, itm);
//     console.log("hola" + data);
//   } catch (err) {
//     alert("Servidor no responde");
//   }
//   filterData(data)
// });
document.addEventListener("DOMContentLoaded", async () => {
    // Se hace la peiticion para traer la informacion de las paletas
    try{
    let res = await fetch(url);
    data = await res.json();
     console.log(data)
    }catch(err){
          alert("Servidor no responde");
    }
    filterData(data)
})
// itm.addEventListener("click", (e) => {
//   aCarrito(e);
// });
// items.addEventListener("click", (e) => {
//   controladorBoton(e);
// });
// const aCarrito = (e) => {
//   if (e.target.classList.contains("itemb")) {
//     setCarrito(e.target.parentElement);
//   }
//   e.stopPropagation();
// };
const filterData = (data) => {
    let paletasLeche = data.filter(item => item.categorie === "consola");
    let paletasFrutas = data.filter(item => item.categorie === "manga");
    let startWars=      data.filter(item => item.categorie  === "starwars")

     console.log("hola"+startWars)

      console.log("hola1"+paletasFrutas )

     console.log("hola2"+paletasLeche)

    pintarProduct(paletasFrutas, frutaCon)
    pintarProduct(paletasLeche, lecheCon)
    pintarProduct(startWars, starCon)

}
categorias.addEventListener('change', (e) => {
    let prueba = e.target.value;
    console.log("hola")
    console.log(prueba), prueba
    if (prueba === '0') {
        todo.style.display  ="none"
        startw.style.display = 'block'
        manga.style.display = 'bock'
        leche.style.display = 'block'
    
       
    }
    else if (prueba === '2') {
        startw.style.display = 'none'
        manga.style.display = 'block'
       consola.style.display = 'none'
        todo.style.display = 'none'
    
       
    } else if (prueba === '3') {
        startw.style.display = 'none'
         manga.style.display = 'none'
        leche.style.display = 'block'
        todo.style.display = 'none'
    }
        else if (prueba === '4') {
            startw.style.display = 'block'
           manga.style.display = 'none'
          leche.style.display = 'none'
          todo.style.display = 'none'
         
    //   } else if (prueba === '5') {
    // //     frutas.style.display = 'none'
    // //     leche.style.display = 'none'
       
    // }
        }
    // // else {
    //      frutas.style.display = 'block'
    //     leche.style.display = 'block'
    //     startw.style.display = 'block'
    //     // todito.style.display = 'none'
       
       
    // // }
})

// categorias.addEventListener("change", (e) => {
//   let prueba = e.target.value;
//   console.log("holakkkkk" + prueba);
//   if (prueba == 0) {
//     const results = data.filter(
//       (h) =>
//         h.categorie === "Start Wars" ||
//         h.categorie === "consola" ||
//         h.categrie === "manga"
//     );

//     pintarProduct(results, template, itm);
//     console.log("results" + results);
//   }

//   if (prueba == 1) {
//     const results = data.filter((h) => h.categorie === "Start Wars");

//     pintarProduct(results, template, itm);
//     console.log("results" + results);
//   }
//   if (prueba == 2) {
//     const results = data.filter((h) => h.categorie === "consola");

//     pintarProduct(results, template, itm);
//     console.log("results" + results);
//   }
//   if (prueba == 3) {
//     const results = data.filter((h) => h.categorie === "manga");

//     pintarProduct(results, template, itm);
//     console.log("results" + results);
//   }
// });

//desarrollo del buscador
buscador.addEventListener("keyup", async (e) => {
  e.preventDefault();
  let resBuscador=[]
  let ingreso = e.target.value.toLowerCase();
  const data = await getProduct("http://localhost:3000/articulos");
  console.log("ingreso" + ingreso);
  let er = new RegExp(ingreso, "i");
  // console.log("errr" + er);
    resBuscador = data.filter((item) => er.test(item.name));
    //let startWars = data.filter((item) => er.test(item.name));
    console.log(resBuscador) 
     pintarProduct(resBuscador,conBus);
  
     todito.style.display  ="block"
     startw.style.display = 'none'
     manga.style.display = 'none'
     leche.style.display = 'none'
  
   


    
  


});
