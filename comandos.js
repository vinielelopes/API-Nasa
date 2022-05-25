let elementDate = $("#data");
let displayN = $("#displayNasa");


let pedido = (dateUsuario)=> {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=M2P5a7nzumVmR1clw4c37PI21eFsrW1wgVD7qDuS&date=${dateUsuario}`,
        type: "GET",
        success(resposta){
            let imagem = resposta.url
            let tit = resposta.title
            let exp = resposta.explanation


            displayN.append(`
                <h2>${tit}</h2>
                <img src = "${imagem}">
                <p>${exp}</p>

            
            `)


            let divDis = $("#displayNasa");
            divDis.css("display", "block");
              
    
        }
    });
   
}

$("#formulario").submit((event)=>{
    event.preventDefault()
    let dateUsuario = elementDate.val()
    pedido(dateUsuario)


})