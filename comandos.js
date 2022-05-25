let elementImg = $("img");
let elementDate = $("#data");
let tituloFoto = $("#titulo");
let resumo = $("#explicacao");
let botao = $("#btn");

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=M2P5a7nzumVmR1clw4c37PI21eFsrW1wgVD7qDuS",
    success(resposta){
        let imagem = resposta.url
        let data = resposta.date
        let tit = resposta.title
        let exp = resposta.explanation
    
        elementImg.src = imagem
        tituloFoto.textContent = tit
        resumo.textContent = exp
    
        botao.addEventListener("click", function display(){
            let divDis = $("#displayNasa");
            divDis.style.display = "block";
    
        })

    }
});






