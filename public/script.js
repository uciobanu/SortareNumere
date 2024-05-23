// Declară un array gol pentru a stoca numele introduse de utilizator
let names = [];

// Funcție pentru a adăuga un nume nou în array-ul names
function addName() {
    // Obține elementul input după ID-ul său
    const input = document.getElementById('nameInput');
    // Extrage valoarea (numele) introdusă în câmpul input
    const name = input.value;
    // Verifică dacă numele nu este gol
    if (name) {
        // Adaugă numele în array-ul names
        names.push(name);
        // Golește câmpul input după ce numele este adăugat
        input.value = '';
        // Setează focusul înapoi pe câmpul input pentru următoarea introducere
        input.focus();
        // Actualizează lista afișată de nume
        displayNames();
    }
}

// Funcție pentru a sorta array-ul names alfabetic
function sortNames() {
    names.sort();
    // Actualizează lista afișată de nume după sortare
    displayNames();
}

// Funcție pentru a actualiza lista afișată de nume pe pagina web
function displayNames() {
    // Obține elementul care va afișa lista de nume
    const list = document.getElementById('nameList');
    // Setează innerHTML-ul elementului list pentru a afișa fiecare nume într-un <div> propriu
    // Funcția map() creează un nou array cu rezultatele apelării unei funcții furnizate pentru fiecare element din array-ul names
    list.innerHTML = names.map(name => `<div>${name}</div>`).join('');
}
