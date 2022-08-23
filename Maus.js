import Produkt from "./Produkt.js";
import makeCenter from "./funktion/makeCenter.js";
class Maus extends Produkt {
    constructor(marke, preis, farbe , bewegungserkennung) {
        super(marke,preis,farbe);
        this.bewegungserkennung = bewegungserkennung ;
        
    }

}
Maus.prototype.showinfo = function () {
    makeCenter(` Maus ${this.marke}  ${this.preis} Euro` );
    console.log(`


         Marke              :   ${this.marke}

         Farbe              :   ${this.farbe}

         Preis              :   ${this.preis} Euro

         Bewegungserkennung :   ${this.bewegungserkennung}


  `);
  makeCenter("");
}



export default Maus;
