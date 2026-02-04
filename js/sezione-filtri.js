// ARRAY PER I FILTRI - Copia dell'array originale
import "./products.js";
import { prodottiOriginali, mostraProdotti } from "./products.js";

// Oggetto filtri che tiene traccia di quali filtri sono stati  applicati per poterne applicare di più contemporaneamente
const filtriAttivi = {
  brand: [],
  prezzoMin: null,
  prezzoMax: null,
  ricerca: null,
  colore: [],
  data_pubblicazione: null,
  taglia: [],
  categoria: [],
};

// funzione per applicare più filtri contemporaneamente
function applicaFiltri() {
  let prodottiFiltrati = [...prodottiOriginali];
  // Inizia sempre dell'array originale

  // filtro brand (se c'è almeno un brand selezionato)
  if (filtriAttivi.brand.length > 0) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => filtriAttivi.brand.includes(p.brand));
  }

  // filtro per categoria
  if (filtriAttivi.categoria.length > 0) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => filtriAttivi.categoria.includes(p.categoria));
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

  // filtro taglia (se c'è almeno una taglia selezionata)
  if (filtriAttivi.taglia.length > 0) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => filtriAttivi.taglia.includes(p.taglia));
  }

  // filtro colore (se c'è almeno un colore selezionato)
  if (filtriAttivi.colore.length > 0) {
    prodottiFiltrati = prodottiFiltrati.filter((p) => filtriAttivi.colore.includes(p.colore));
  }

  //filtro data_pubblicazione
  if (filtriAttivi.data_pubblicazione !== null) {
    prodottiFiltrati = prodottiFiltrati.filter(
      (p) => p.data_pubblicazione >= filtriAttivi.data_pubblicazione,
    );
  }

  //filtro data_pubblicazione
  if (filtriAttivi.data_pubblicazione !== null) {
    prodottiFiltrati = prodottiFiltrati.filter(
      (p) => p.data_pubblicazione <= filtriAttivi.data_pubblicazione,
    );
  }

  //aggiungere altro ciclo if inverso a quello sopra per poter filtrare dal prezzo più alto

  // mostra risultati dei prodotti filtrati
  mostraProdotti(prodottiFiltrati);
}

// Listener dei colori
const checkboxColori = document.querySelectorAll('input[type="checkbox"].filter-color');

checkboxColori.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Aggiungi il colore all'array se non c'è già
      if (!filtriAttivi.colore.includes(checkbox.value)) {
        filtriAttivi.colore.push(checkbox.value);
      }
    } else {
      // Rimuovi il colore dell'array
      filtriAttivi.colore = filtriAttivi.colore.filter((c) => c !== checkbox.value);
    }
    applicaFiltri();
  });
});

// Listener delle taglie
const checkboxTaglie = document.querySelectorAll('input[type="checkbox"].filter-size');

checkboxTaglie.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Aggiungi la taglia all'array se non c'è già
      if (!filtriAttivi.taglia.includes(checkbox.value)) {
        filtriAttivi.taglia.push(checkbox.value);
      }
    } else {
      // Rimuovi la taglia dell'array
      filtriAttivi.taglia = filtriAttivi.taglia.filter((t) => t !== checkbox.value);
    }
    applicaFiltri();
  });
});
