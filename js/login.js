//O que é um evento?
//Um evento é uma ação que ocorre seja ela feita, pelo usuário ou sistema:
//Ex: O sistema pode carregar a página, o usuário pode clicar no botão, o usuário pode pressionar a tecla, etc;

//atributo = style
//valor do atributo outline-color
// a cor do atributo = vermelho

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");

// inputSenha.addEventListener("keyup", ()=>{
//     if(inputSenha.value.length < 5){
//         inputSenha.setAttribute("style", "outline-color: red;");
//         passLabel.setAttribute("style", "color: red;");
//     }else{
//         inputSenha.setAttribute("style", "outline-color: green;");
//         passLabel.setAttribute("style", "color: green;");
//     }
// });

// inputUser.addEventListener("keyup",()=>{

//     if(inputUser.value.length < 5){
//         inputUser.setAttribute("style", "outline-color: red;");
//         userLabel.setAttribute("style", "color: red;");
//     }else{
//         inputUser.setAttribute("style", "outline-color: green;");
//         userLabel.setAttribute("style", "color: green;");
//     }

// });

/* <i class="fa fa-eye-slash" aria-hidden="true"></i> */
//Quando o usuário clicar no olho para ver a senha troque também o ícone....


const eyePass = document.querySelector(".fa");

// eyePass.addEventListener("click", ()=>{
    // if(inputSenha.type == "password"){
    //     inputSenha.type = "text";
    // }else{
    //     inputSenha.type = "password";
    // }

//     if(inputSenha.getAttribute("type") == "password"){
//         inputSenha.setAttribute("type","text");
//         eyePass.setAttribute("class","fa fa-eye-slash");
//     }else{
//         inputSenha.setAttribute("type","password");
//         eyePass.setAttribute("class","fa fa-eye");
//     }

// });


//LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Cevilha da Silva",
        nomeUsuario : "cevilha",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Seba da Costa",
        nomeUsuario : "seba",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Zuleide Camacho",
        nomeUsuario : "zuzu",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Ednaldo Sandro",
        nomeUsuario : "edi",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Moscone Oswaldo",
        nomeUsuario : "mosca",
        senhaUsuario: "123456"
    }
];

addEventListener("click", (evt)=>{

    
    //USUÁRIO LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputSenha.value
    }

    if(evt.target.id == "btnSubmit"){

        if(usuarioLogado.nomeUsuarioLogado == "acilha" && usuarioLogado.senhaUsuarioLogado == "123456"){
            alert("VALIDADO");
        }else{
            alert("NÃO VALIDADO");
        }

    }
    
});