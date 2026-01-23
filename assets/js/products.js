// ### 1. Creazione dell'Array di Oggetti

// Il posto migliore dove mettere questo codice sarebbe in un file dedicato, ad esempio assets/js/products.js.

// Ogni "prodotto" è un oggetto racchiuso tra parentesi graffe { }, e l'insieme dei prodotti è racchiuso in parentesi quadre [ ].

const prodotti = [
  { id: 0, nome: "Esempio prodotto" },
  { categoria: "Elettronica" },
  { prezzo: 699 },
  { immagine: "./assets/img/telefono.jpg" },
  {},
  {},
  {},
  {},
];

// ### 2. Come applicarli al progetto (Visualizzazione)

// Per visualizzarli nel tuo index.html, dovresti avere un contenitore vuoto (es. <div id="lista-prodotti"></div>). In JS, usi un ciclo per generare l'HTML:

const contenitore = document.getElementById("lista-prodotti");

function mostraProdotti(arrayDati) {
  // svuota il contenitore prima di stampare
  contenitore.innerHTML = "";

  arrayDati.forEach((prodotto) => {
    contenitore.innerHTML += `
        <div class="card">
           <img src="${prodotto.imagine}" alt="${prodotto.nome}">
           <h3>${prodotto.nome}</h3>
           <p>Categoria: ${prodotto.categoria}</p>
           <span>${prodotto.prezzo}</span>
        </div>`;
  });
}

// chiamata iniziale per vedere tutti i prodotti
mostraProdotti(prodotti);

// 3. Come funziona il sistema di filtro
// Il filtraggio si basa sul metodo JavaScript .filter(). Questo metodo crea un nuovo array che contiene solo gli elementi che soddisfano una determinata condizione.

// Esempio: Filtrare per Categoria
// Se volessi vedere solo i prodotti della categoria "Elettronica":

const prodottiFiltrati = prodotti.filter((prodotto) => {
  return prodotto.categoria === "Elettronica";
});

// Poi passi l'array filtrato alla funzione che stampa l'HTML
mostraProdotti(prodottiFiltrati);

// Rendiamolo dinamico (Interazione utente)
// Immagina di avere una select nel tuo HTML per scegliere la categoria:

const selector = document.getElementById("filtro-categoria");

selector.addEventListener("change", (event) => {
  const valoreScelto = event.target.value;

  if (valoreScelto === "tutti") {
    mostraProdotti(prodotti);
  } else {
    const filtrati = prodotti.filter((p) => p.categoria === valoreScelto);
    mostraProdotti(filtrati);
  }
});

// Riassunto del meccanismo
// Dati: Hai un array originale (prodotti) che non viene mai modificato.

// Azione: L'utente interagisce con un filtro (bottone o input).

// Logica: Usi .filter() sul array originale per generare una "copia ridotta".

// Render: Chiami la funzione che disegna l'HTML passandole solo i dati filtrati.

// Ti servirebbe aiuto per collegare questo script ai file che vedo nello screenshot (ad esempio, come gestire i percorsi tra le cartelle)?

// DA METTERE TAG VUOTO PER IL ROOT HTML PER JAVA
<div id="lista-prodotti"></div>;
