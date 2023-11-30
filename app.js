//Menu lateral
var menu_visible = false
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
       menu.style.display = "block";
       menu_visible = true; 
    }
    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}
//oculto el menu una vez que soluciono una opción
let links = document.querySelectorAll ("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su ID
function crearBarra (id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }
}

//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let coreldraw = document.getElementById("coreldraw");
crearBarra(coreldraw);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let blender = document.getElementById("blender");
crearBarra(blender);
let unity = document.getElementById("unity");
crearBarra(unity);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utillizo un arrego, cada posición pertenece a un elemento
//comienza en -1 por que no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1]
//esta variable la voy a utilizar de bandera para saber si ya se ejecuto la animación
let entro = false;

//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 13, 1, intervalJavascript);
        },100);
        const intervalCorelDraw = setInterval(function(){
            pintarBarra(coreldraw, 15, 2, intervalCorelDraw);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 3, intervalPhotoshop);
        },100);
        const intervalBlender = setInterval(function(){
            pintarBarra(blender, 10, 4, intervalBlender);
        },100);
        const intervalUnity = setInterval(function(){
            pintarBarra(unity, 9, 5, intervalUnity);
        },100);
        
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
