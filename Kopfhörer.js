import Produkt from "./Produkt.js";
import makeCenter from "./funktion/makeCenter.js";


class Kopfhörer extends Produkt {
    constructor(marke, preis, farbe , mikrofon, drahtlos) {
        super(marke,preis,farbe);
        this.mikrofon = mikrofon ;
        this.drahtlos = drahtlos ;
    }
    showinfo = function () {
        makeCenter(` Kophörer ${this.marke}  ${this.preis} Euro` );
        console.log(`


             Marke          :   ${this.marke}

             Farbe          :   ${this.farbe}

             Preis          :   ${this.preis} Euro

             Mikrofon       :   ja

             Drahtlos       :   ja


      `);
      makeCenter("");
    }

}

export default Kopfhörer;
