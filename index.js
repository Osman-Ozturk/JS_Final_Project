import promptSync from "prompt-sync";
const prompt = promptSync({ eot: true });
import chalk from "chalk";
import {
  laptopProdukts,
  kopfhörerProdukts,
  mausProdukts,
} from "./defaultProdukts.js";
import makeCenter from "./funktion/makeCenter.js";
import {eintritt} from "./funktion/eintritt.js";

eintritt();

let kategori;
let exit = "w";
let produktName;
let ausgewalteProdukt;
const start = () => {
  while (exit !== "q") {
    console.log(chalk.green(
                   " Welches Geräte möchten Sie haben ? \n \n (A)  Laptop  |  (B)  Kopfhörer  |  (C)  Maus\n \n  Wähle bitte einen Buchstaben aus: A, B  oder  C ? \n"
    ));
    kategori = prompt(``);
    console.clear();
    if (kategori.toLowerCase() === "a") {
      console.log();
      makeCenter(`  Laptop Propukts  `);
      laptopProdukts.forEach((element, index) => {
        console.log(`
          ${index + 1} ---> ${element.marke}  ${element.model}  ${element.preis} €
        `);
      });
      console.log();
      makeCenter("");
      break;
    } else if (kategori.toLowerCase() === "b") {
      console.log();
      makeCenter(` Kopfhörer Propukts `);
      kopfhörerProdukts.forEach((element, index) => {
        console.log(`
          ${index + 1} --->  ${element.marke}   ${element.preis} €
        `);
      });
      console.log();
      makeCenter("");
      break;
    } else if (kategori.toLowerCase() === "c") {
      console.log();
      makeCenter(` Maus Propukts `);
      mausProdukts.forEach((element, index) => {
        console.log(`
          ${index + 1} ---> ${element.marke}   ${element.preis} €
        `);
      });
      console.log();
      makeCenter("");
      break;
    } else {
      console.log(`

        -------------------------------------------------------------------

        Opss. Du hast einen falschen Buchstaben ausgewählt.
        Gib bitte nur (A), (B) oder (C) ein.

        -------------------------------------------------------------------
         \n`);
    }
  }

  while (exit !== "q") {
    console.log(
      "Bitte wählen Sie eine Produkt\n  \nWähle bitte eine Zahle aus: 1,2,3,4,5 \n oder (Q) Ouit"
    );
    produktName = prompt(``);
    console.clear();
    if (produktName.toLowerCase() === "q") {
      exit = "q";
      console.log("Bis dann ...");
      
    }else if (parseInt(produktName) > 0  &&  parseInt(produktName) < 6){
      for (let i = 1; i < 6; i++) {
        if (produktName == i) {
          ausgewalteProdukt =
            kategori === "a"
              ? laptopProdukts[i-1]
              : kategori === "b"
              ? kopfhörerProdukts[i-1]
              : kategori === "c"
              ? mausProdukts[i-1]
              : "";
          ausgewalteProdukt.showinfo();
          break;
        }
      }
      break; 
    }else {
      console.log(`
        -------------------------------------------------------------------

        Opss. Du hast einen falschen Zahlen ausgewählt.
        Gib bitte nur 1,2,3,4,5 oder Q ein.

        -------------------------------------------------------------------
         \n`);
    }
  }
};
start();
let kundenWarenKorb = [];
let kaufWagen;
const kaufen = () => {
while (exit !== "q") {
  console.log(
    "Möchten Sie in Ihren Warenkorb legen ?\n  \nBitte drücken Sie (j) oder (n)\n"
  );
  kaufWagen = prompt(``);
  console.clear();
  if (kaufWagen === "j") {
    kundenWarenKorb.push(ausgewalteProdukt);
    console.log();
    console.log("  Wollen Sie zur Kasse gehen oder noch einkaufen? \n \n(A) Zur Kasse    (B) Einkaufen ");
    const zurGeht = prompt(``);
    console.clear()
    if(zurGeht.toLowerCase() === "a" ){kassen()} else if(zurGeht.toLowerCase() === "b" ){console.clear();start(); kaufen();} else {
      console.log(`
          -------------------------------------------------------------------
  
          Opss. Du hast einen falschen  ausgewählt.
          Gib bitte nur (A) oder (B) ein.
  
          -------------------------------------------------------------------
           \n`);
           kaufen();
    }
    
    break;
  } else if (kaufWagen === "n") {
    start();
    kaufen();
  } else {
    console.log(`
        -------------------------------------------------------------------

        Opss. Du hast einen falschen  ausgewählt.
        Gib bitte nur (j) oder (n) ein.

        -------------------------------------------------------------------
         \n`);
  }
  
}}
const kassen = () => {
  kundenWarenKorb.forEach((element) => {
    console.log(`    -----------------------------
                                
      ${element.marke}  ---  ${element.preis} €            
                                    
    -----------------------------       
    `);
  })
  let total = kundenWarenKorb.reduce((acc , crr) => acc + crr.preis,0);
  console.log(` TOTAL :                      ${total} €`);

  console.log();

  console.log('Wollen Sie kaufen ?  \n \nBitte drücken Sie (j) oder (n)\n' );
  const letzte = prompt (``) ;
  console.clear()

  if(letzte.toLowerCase() === "j")senden(); else if(letzte.toLowerCase() === "n") {kundenWarenKorb=[];start(); kaufen();}else{ console.log(`
  -------------------------------------------------------------------

  Opss. Du hast einen falschen  ausgewählt.
  Gib bitte nur (j) oder (n) ein.

  -------------------------------------------------------------------
   \n`);}

}

const senden = () => {
  console.clear();
  const vollName = prompt(' Bitte geben Sie ihre Name und Vorname ein :  ');
  const adresse = prompt(' Bitte geben Sie ihre Adresse , PLZ und Ort ein :  ');
  const mail = prompt(' Bitte geben Sie ihre Email ein :  ');
  const tel = prompt(' Bitte geben Sie ihre TelefonNummer  ein :  ');
  kundenWarenKorb.forEach((element) => {
    console.log(`    -----------------------------
                                
      ${element.marke}  ---  ${element.preis} €            
                                    
    -----------------------------       
    `);
  })
  let total = kundenWarenKorb.reduce((acc , crr) => acc + crr.preis,0);
  console.log(` TOTAL :                      ${total} €`);
  console.log();
  console.log();
  console.log(chalk.yellow(`
  
  
  **********************************************************************************************************
  

  Lieber/Liebe ${vollName} .Ihre Bestellungen werden innerhalb von 2 Tagen an ${adresse} gesendet.Sie können Ihr Paket mit der Sendungsverfolgungsnummer verfolgen, die wir an ${mail} E-Mail-Adresse senden werden. Vielen Dank, dass Sie sich für uns entschieden haben.
  


  ************************************************************************************************************`));
}
kaufen ();





