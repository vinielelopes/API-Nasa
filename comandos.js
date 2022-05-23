let elementImg = document.querySelector("img");
let elementDate = document.querySelector("#data");
let tituloFoto = document.querySelector("#titulo");
let resumo = document.querySelector("#explicacao");
let botao = document.querySelector("#btn");

let requisicao = new XMLHttpRequest();
requisicao.open("GET", "https://api.nasa.gov/planetary/apod?api_key=M2P5a7nzumVmR1clw4c37PI21eFsrW1wgVD7qDuS");
requisicao.send();

requisicao.addEventListener("load", function(){
    let resposta = JSON.parse(requisicao.responseText)
    console.log(resposta);

    let imagem = resposta.url
    let data = resposta.date
    let tit = resposta.title
    let exp = resposta.explanation

    elementImg.src = imagem
    tituloFoto.textContent = tit
    resumo.textContent = exp

    botao.addEventListener("click", function display(){
        let divDis = document.querySelector("#displayNasa");
        divDis.style.display = "block";

    })


})

