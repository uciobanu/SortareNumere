const express = require('express'); // Include Express
const app = express(); // Creează o aplicație Express
const port = 3000; // Setează portul

app.use(express.static('public')); // Servește fișierele din folderul 'public'

// Pornire server pe portul 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Afișează adresa serverului
});
