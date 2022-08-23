import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import makeCenter from "./funktion/makeCenter.js";
import Produkt from './Produkt.js';


class Laptop extends Produkt {
    constructor(marke, preis, farbe , model, betriebsSystem, ramSpeicher, displayGrösse) {
        super(marke,preis,farbe);
        this.model = model ;
        this.betriebsSystem = betriebsSystem ; 
        this.ramSpeicher =ramSpeicher ;
        this.displayGrösse = displayGrösse ;
    }
    showinfo() {
        makeCenter(` Laptop ${this.marke} ${this.model} ${this.preis} Euro` );
        console.log(`
    
    
             Marke          :   ${this.marke}
    
             Model          :   ${this.model}
    
             Farbe          :   ${this.farbe}
    
             Preis          :   ${this.preis} Euro
    
             BetriebsSystem :   ${this.betriebsSystem}
    
             DisplayGrösse  :   ${this.displayGrösse}
    
    
      `);
      makeCenter("");
    }
}





export default Laptop;