// ARRAY PER I FILTRI - Copia dell'array originale
import "./products.js";

let prodottiFiltrati = [...prodottiOriginali];

// Oggetto filtri che tiene traccia di quali filtri sono stati  applicati per poterne applicare di più contemporaneamente
const filtriAttivi = {
  brand: null,
  prezzoMin: null,
  prezzoMax: null,
  ricerca: null,
  colore: null,
  data_pubblicazione: null,
  taglia: null,
};

// funzione per applicare più filtri contemporaneamente
function applicaFiltri() {
  // Inizia sempre dell'array originale

  // filtro brand
  if (filtriAttivi.brand && filtriAttivi.brand !== "tutti") {
    prodottiFiltrati = prodottiFiltrati.filter((p) => p.brand === filtriAttivi.brand);
  }
  // filtro per categoria
  if (filtriAttivi.categoria && filtriAttivi.categoria !== "tutti") {
    prodottiFiltrati = prodottiFiltrati.filter((p) => p.categoria === filtriAttivi.categoria);
  }

  // aggiungere altri cicli if come quello sopra per altri filtri come brand;

  // filtro per prezzo minimo
  if (filtriAttivi.prezzoMin !== null) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => p.prezzo >= filtriAttivi.prezzoMin);
  }
  // filtro prezzo max
  if (filtriAttivi.prezzoMax !== null) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => p.prezzo <= filtriAttivi.prezzoMax);
  }

  // filtro taglia
  if (filtriAttivi.taglia !== null) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => p.taglia <= filtriAttivi.taglia);
  }

  //aggiungere altro ciclo if inverso a quello sopra per poter filtrare dal prezzo più alto

  // mostra risultati dei prodotti filtrati
  mostraProdotti(prodottiFiltrati);
}

// da aggiungere funzioni per poter impostare filtri per Categoria, brand, colore, prezzo minimo e massimo,
// filtro ricerca e reset dei filtri

// Es. Come funziona il sistema di filtro
// Il filtraggio si basa sul metodo JavaScript .filter(). Questo metodo crea un nuovo array che contiene solo gli elementi che soddisfano una determinata condizione.

// Esempio: Filtrare per Categoria
// Se volessi vedere solo i prodotti della categoria "Elettronica":
// Poi passi l'array filtrato alla funzione che stampa l'HTML

// Rendiamolo dinamico (Interazione utente)
// Immagina di avere una select nel tuo HTML per scegliere la categoria:

const selector = document.getElementById("filtro-categoria");

/* selector.addEventListener("change", (event) => {
  const valoreScelto = event.target.value;

  if (valoreScelto === "tutti") {
    mostraProdotti(prodotti);
  } else {
    const filtrati = prodotti.filter((p) => p.categoria === valoreScelto);
    mostraProdotti(filtrati);
  }
});
*/

// Riassunto del meccanismo
// Dati: Hai un array originale (prodotti) che non viene mai modificato.

// Azione: L'utente interagisce con un filtro (bottone o input).

// Logica: Usi .filter() sul array originale per generare una "copia ridotta".

// Render: Chiami la funzione che disegna l'HTML passandole solo i dati filtrati.

// DA METTERE TAG VUOTO PER IL ROOT HTML PER JAVA

// <div id="lista-prodotti"></div>;

const btnFiltri = document.querySelectorAll(".filter-size");

btnFiltri.addEventListener("click", applicaFiltri);
