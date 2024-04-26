// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
function twitter() {
    let elimina = document.querySelector("aside div:last-of-type ol li:nth-child(2)")
    elimina.parentNode.removeChild(elimina)
}
window.onload=twitter()
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
function elimanaPadre(){
    let figlio = document.querySelector(".jumbotron a")
    figlio.addEventListener("click", function(){
        let padre = figlio.closest(".jumbotron")
        padre.remove()
    })
}
elimanaPadre()
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
// Funzione per creare l'alert con il nome dell'autore
function mostraAutore(event) {
    // Ottieni il nome dell'autore dalla proprietà 'innerText' dell'elemento
    var autore = event.target.innerText;
    // Mostra l'alert con il nome dell'autore
    alert("Autore del post: " + autore);
}

// Ottieni tutti gli elementi <a> con la classe 'blog-post-meta' che contengono il nome dell'autore
var autori = document.querySelectorAll('.blog-post-meta a');

// Ciclo attraverso gli elementi autore e aggiungi un listener per l'evento 'mouseover'
for (var i = 0; i < autori.length; i++) {
    autori[i].addEventListener('mouseover', mostraAutore);
}
mostraAutore()
