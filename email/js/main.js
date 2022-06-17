// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// Asking user email 
const userMail = prompt("Enter your email address to sign-in");
console.log(userMail);


// My Array 
const mailList = ["splintercell@ubisoft.com", "wonderwoman@gmail.com", "marvelous753@tesla.com", "lore17@gmail.com", "elden-ring@fromsoftware.com", "masseffect@bioware.com", "thelastofus2@naughtydog.com", "uncharted@naughtydog.com", "ghostwiretokyo6@tangogameworks.com", "hellblade2@ninjatheory.com", "godofwar2022@santamonicastudio.com", "bioshock@g2kgames.com", "residentevil8@capcom.com", "watchdogs3@ubisoft.com", "callofduty@acivision.com",];
console.log(mailList);


// Check and message 
let mailCheck = false;
let message = ("Couldn't find your email");



// Check email with loop
for (let myArray = 0; myArray < mailList.length; myArray++) {
    if (userMail === mailList[myArray]) {

        mailCheck = true;
        message = ("Access granted");

    }

}

// Check and message output 
console.log(mailCheck);
alert(message);






