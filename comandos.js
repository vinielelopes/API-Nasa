let elementDate = $("#data");
let botao = $("#btn");
let displayN = $("#displayNasa");


botao.on("click", function display(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=M2P5a7nzumVmR1clw4c37PI21eFsrW1wgVD7qDuS",
        success(resposta){
            let imagem = resposta.url
            let data = resposta.date
            let tit = resposta.title
            let exp = resposta.explanation

            displayN.append(`
                <img src = "${imagem}">
                <h2>${tit}</h2>
                <p>${exp}</p>

            
            `)

            let divDis = $("#displayNasa");
            divDis.css("display", "block");
              
    
        }
    });
   
})
