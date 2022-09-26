// A linha a seguir carrega a função quando a página estiver carregar
window.onload = function(){
    // Coleta todas as ocorrências da tag <p>
    const paragrafos = document.querySelectorAll("p");
    // exibe toto o objeto
    console.log(paragrafos);
    // exibe o primeiro parágrafo
    console.log(paragrafos[0]);
    // exibe o tipo do nó
    console.log(paragrafos[0].nodeName);
}