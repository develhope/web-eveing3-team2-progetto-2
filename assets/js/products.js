// ### 1. Creazione dell'Array di Oggetti

// Il posto migliore dove mettere questo codice sarebbe in un file dedicato, ad esempio assets/js/products.js.

// Ogni "prodotto" è un oggetto racchiuso tra parentesi graffe { }, e l'insieme dei prodotti è racchiuso in parentesi quadre [ ].

const prodotti = [
  {
    id: 1,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw6ce0a8c8/images/4/4/8/0/448074a.jpg?sw=350&sh=400&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "Taglia Extra",
    prezzo: "75.99 €",
    nome: "EMP Signature Collection",
    brand: "Slipknot",
    categoria: "Felpa jogging",
  },
  {
    id: 2,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwdc2f42ba/images/5/9/2/3/592324a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Quasi esaurito",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 19,99 €",
    nome: "Hellraiser - Ozzy & Lemmy",
    brand: "Ozzy Osbourne",
    categoria: "T-Shirt",
  },
  {
    id: 3,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw1b2f640e/images/3/9/7/1/397124a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Premium",
    taglia: "Anche in Taglie Forti",
    prezzo: "323,99 €",
    nome: "EMP Signature Collection",
    brand: "Slipknot",
    categoria: "Giacca di pelle",
  },
  {
    id: 4,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw2630f6af/images/5/6/0/2/560285.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "",
    prezzo: "Da 539,99 €",
    nome: "Nixon - 51-30",
    brand: "The Rolling Stones",
    categoria: "Orologi da polso",
  },
  {
    id: 5,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc2eedf77/images/3/4/3/0/343005.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 269,99 €",
    nome: "Rock & Roll - Will Never Die",
    brand: "AC-DC",
    categoria: "Giacca di pelle",
  },
  {
    id: 6,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw5a8d907c/images/3/6/9/7/369707a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 19,99 €",
    nome: "...And Justice For All - Tracklist",
    brand: "Metallica",
    categoria: "T-Shirt",
  },
  {
    id: 7,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw66b6d349/images/5/7/1/9/571994a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 75,99 €",
    nome: "EMP Signature Collection",
    brand: "Electric Callboy",
    categoria: "Felpa jogging",
  },
  {
    id: 8,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw35883168/images/5/8/2/4/582485a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 19,99 €",
    nome: "EMP Signature Collection",
    brand: "Five Finger Death Punch",
    categoria: "T-Shirt",
  },
];

// ### 2. Come applicarli al progetto (Visualizzazione)

// Per visualizzarli nel tuo index.html, dovresti avere un contenitore vuoto (es. <div id="lista-prodotti"></div>). In JS, usi un ciclo per generare l'HTML:

const contenitore = document.getElementById("lista-prodotti");

function mostraProdotti(arrayDati) {
  // svuota il contenitore prima di stampare
  contenitore.innerHTML = "";

  arrayDati.forEach((prodotto) => {
    contenitore.innerHTML += `
      <article class="tessera-shop">
        <button class="tasto-carrello" aria-label="Aggiungi al carrello">
          <span class="icona-carrello">🛒</span>
        </button>
        <a class="frame-foto" href="#">
          <img class="foto-prodotto" src="${prodotto.immagine}" alt="${prodotto.nome}" />
        </a>
        <div class="riga-etichette">
          <span class="etichetta-grigia">${prodotto.stato}</span>
          <span class="etichetta-grigia">${prodotto.taglia}</span>
        </div>
        <div class="riga-prezzo">
          <span class="prezzo-secco">${prodotto.prezzo}</span>
        </div>
        <h3 class="titolo-prodotto">${prodotto.nome}</h3>
        <p class="briciole-brand">
          ${prodotto.brand} <span class="slash">/</span>${prodotto.categoria}
        </p>
      </article>`;
  });
}

// `<div class="card">
//            <img src="${prodotto.imagine}" alt="${prodotto.nome}">
//            <h3>${prodotto.nome}</h3>
//            <p>Categoria: ${prodotto.categoria}</p>
//            <span>${prodotto.prezzo}</span>
//         </div>`;

// chiamata iniziale per vedere tutti i prodotti
mostraProdotti(prodotti);

// 3. Come funziona il sistema di filtro
// Il filtraggio si basa sul metodo JavaScript .filter(). Questo metodo crea un nuovo array che contiene solo gli elementi che soddisfano una determinata condizione.

// Esempio: Filtrare per Categoria
// Se volessi vedere solo i prodotti della categoria "Elettronica":

// const prodottiFiltrati = prodotti.filter((prodotto) => {
//   return prodotto.categoria === "Elettronica";
// });

// // Poi passi l'array filtrato alla funzione che stampa l'HTML
// mostraProdotti(prodottiFiltrati);

// // Rendiamolo dinamico (Interazione utente)
// // Immagina di avere una select nel tuo HTML per scegliere la categoria:

// const selector = document.getElementById("filtro-categoria");

// selector.addEventListener("change", (event) => {
//   const valoreScelto = event.target.value;

//   if (valoreScelto === "tutti") {
//     mostraProdotti(prodotti);
//   } else {
//     const filtrati = prodotti.filter((p) => p.categoria === valoreScelto);
//     mostraProdotti(filtrati);
//   }
// });

// Riassunto del meccanismo
// Dati: Hai un array originale (prodotti) che non viene mai modificato.

// Azione: L'utente interagisce con un filtro (bottone o input).

// Logica: Usi .filter() sul array originale per generare una "copia ridotta".

// Render: Chiami la funzione che disegna l'HTML passandole solo i dati filtrati.

// Ti servirebbe aiuto per collegare questo script ai file che vedo nello screenshot (ad esempio, come gestire i percorsi tra le cartelle)?

// // DA METTERE TAG VUOTO PER IL ROOT HTML PER JAVA
// <div id="lista-prodotti"></div>;
