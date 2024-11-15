
        let matriceDati = [];

        function aggiungiDati() {
            // Prendi i valori dagli input
            let nome = document.getElementById("nome").value;
            let cognome = document.getElementById("cognome").value;
            let indirizzo = document.getElementById("indirizzo").value;
            let citta = document.getElementById("citta").value;
            let email = document.getElementById("email").value;

            // Verifica che tutti i campi siano riempiti
            if (!nome || !cognome || !indirizzo || !citta || !email) {
                alert("Compila tutti i campi prima di aggiungere i dati!");
                return;
            }

            // Aggiungi i dati alla matrice
            let dati = [nome, cognome, indirizzo, citta, email];
            matriceDati.push(dati);

            // Aggiungi i dati alla tabella
            let tabella = document.getElementById("dataTable");
            let nuovaRiga = tabella.insertRow();
            
            dati.forEach((dato) => {
                let cella = nuovaRiga.insertCell();
                cella.textContent = dato;
            });

            // Ripulisci i campi del modulo
            document.getElementById("dataForm").reset();
        }
      