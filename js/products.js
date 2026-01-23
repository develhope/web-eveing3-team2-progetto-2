// array di oggetti dei vari prodotti

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
  {
    id: 9,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw5be4f4f3/images/5/8/7/9/587970a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Dettagli in metallo",
    taglia: "",
    prezzo: "75,99 €",
    nome: "Men's Harland Top",
    brand: "Heartless",
    categoria: "Maglia a maniche lunghe",
  },
  {
    id: 10,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw55e4fcf4/images/5/8/8/7/588756a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "Ricamato",
    prezzo: "43,99 €",
    nome: "Lost Souls",
    brand: "Rock Rebel by EMP",
    categoria: "Felpa",
  },
  {
    id: 11,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf4578047/images/5/8/8/6/588646a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "",
    prezzo: "10,99 €",
    nome: "Built For Comfort",
    brand: "RED by EMP",
    categoria: "Leggings",
  },
  {
    id: 12,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf5ded4a2/images/5/8/8/5/588597a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "Ricamato",
    prezzo: "43,99 €",
    nome: "Megan",
    brand: "RED by EMP",
    categoria: "Jeans",
  },
  {
    id: 13,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw20497392/images/5/9/5/4/595473a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Stampa Speciale",
    taglia: "",
    prezzo: "Da 24,99 €",
    nome: "Batman Logo FlockPrint",
    brand: "Batman",
    categoria: "T-Shirt",
  },
  {
    id: 14,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw823d78e7/images/5/9/6/4/596427a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Premium",
    taglia: "Anche in Taglie Forti",
    prezzo: "Da 19,99 €",
    nome: "Nekomata",
    brand: "Pinku Kult",
    categoria: "T-Shirt",
  },
  {
    id: 15,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw05a2cf43/images/5/8/4/5/584537a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Destroyed Look",
    taglia: "Aperture",
    prezzo: "48,99 €",
    nome: "Kara Vex Jumper",
    brand: "Banned",
    categoria: "Maglione",
  },
  {
    id: 16,
    immagine:
      "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw6e311774/images/5/8/8/9/588939a.jpg?sw=255&sh=250&sm=fit&sfrm=png",
    stato: "Esclusiva",
    taglia: "Ricamato",
    prezzo: "26,99 €",
    nome: "Celtic Snake T-shirt",
    brand: "Black Premium by EMP",
    categoria: "T-Shirt",
  },
];

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

// chiamata iniziale per vedere tutti i prodotti
mostraProdotti(prodotti);

// Es. Come funziona il sistema di filtro
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

// // DA METTERE TAG VUOTO PER IL ROOT HTML PER JAVA
// <div id="lista-prodotti"></div>;
