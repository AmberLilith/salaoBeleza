var pagesTitles  = {
    generalTitle: "SALÃO LARISSA HAIR",
    index: "FAÇA SEU LOGIN",
    agendarHorario: "AGENDAR HORÁRIO",
}

const getOnlyPageName = () => {
    let pathname = window.location.pathname.split('/');
    let pageName = pathname[2].split('.')[0];
    return pageName
}
//Object.getOwnPropertyDescriptor é um método criado no JavaScript ES5
//que retorna um objeto com propriedade da propriedade/chave especificada.
//São passados como parâmetros o nome do objeto e o nome da chave.
//A primeira propriedade do objeto retornado é .value que tem o valor
//da chave passada como parâmetro.
window.addEventListener("load", function(event){
    document.querySelector("#titulo").textContent = pagesTitles.generalTitle + " - " + Object.getOwnPropertyDescriptor(pagesTitles, getOnlyPageName()).value;
})

const applyFadeInClass = (elementId) =>{
    const el = document.querySelector(`#${elementId}`);
    el.setAttribute("class","text-center fade-in");
    el.addEventListener('transitionend', () => {
    el.setAttribute("class","text-center displayHidden");
    });
}

