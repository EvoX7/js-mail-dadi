// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Creo un prompt per chiedere all'utente la sua email 
// Asking user email 
const userMail = prompt("Enter your email address to sign-in");
console.log(userMail);

// Creo la mia lista di email 
// My Array 
const mailList = ["splintercell@ubisoft.com", "wonderwoman@gmail.com", "marvelous753@tesla.com", "lore17@gmail.com", "elden-ring@fromsoftware.com", "masseffect@bioware.com", "thelastofus2@naughtydog.com", "uncharted@naughtydog.com", "ghostwiretokyo6@tangogameworks.com", "hellblade2@ninjatheory.com", "godofwar2022@santamonicastudio.com", "bioshock@g2kgames.com", "residentevil8@capcom.com", "watchdogs3@ubisoft.com", "callofduty@activision.com",];
console.log(mailList);

// Imposto check e messaggio di risposta per l'utente
// Check and message 
// Se non c'è corrispondenza con le email della mia lista, messaggio di risposta negativo all'utente
let mailCheck = false;
let message = ("Couldn't find your email");


// Controllo se nella mia lista di email c'è corrispondenza 
// Check email with loop
for (let myArray = 0; myArray < mailList.length; myArray++) {
    if (userMail === mailList[myArray]) {

        // Se c'è corrispondenza positiva, allora garantisco l'accesso
        mailCheck = true;
        message = ("Access granted");

    }

}

// Check and message output 
console.log(mailCheck);
alert(message);






